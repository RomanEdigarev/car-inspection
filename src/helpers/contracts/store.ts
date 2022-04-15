import { Module } from 'vuex';
import { State } from '@/store';
import {Contract, Contracts, DamagedComponent} from './model';
import { Auth } from '@/helpers/auth/model';
import ContractsService from '@/services/api/contracts-service/ContractsService';
import FileService from '@/services/api/file-service/FileService';
import login from '@/components/Login/Login.vue';
import {Damage, Inspection} from "@/helpers/inspection/model";
import {date} from "yup";

export const contractsModule: Module<Contracts, State> = {
  state: () => ({
    items: {},
    isLoading: false,
    currentContract: null,
    selectedDamagedComponent: null
  }),
  mutations: {
    toggleLoading: (state: Contracts, payload: boolean) => {
      state.isLoading = payload;
    },
    setContracts: (state: Contracts, payload: { [key: string]: Contract }) => {
      state.items = payload;
    },
    setCurrentContract: (state: Contracts, payload: Contract['id']) => {
      state.currentContract = state.items[payload]
    },
    setPhotoForDamage: (state: Contracts, payload) => {
      const obj = state.currentContract!.inspection.damagedComponents.get(payload.index)
      if (obj) {
        obj.photos = payload.photos
        state.currentContract!.inspection.damagedComponents.set(payload.index, obj)
      }
    },
    selectDamagedComponent: (state: Contracts, payload: string) => {
      state.selectedDamagedComponent = payload
    },
    changeValueInCurrentDamageComponent: (
        state: Contracts,
        payload: {
          damage: Damage;
          isChecked: boolean;
        }
    ) => {
      const selectedDamageComponentObj = state.currentContract!.inspection.damagedComponents.get(state.selectedDamagedComponent!)
      if (selectedDamageComponentObj) {
        const set = new Set(selectedDamageComponentObj.damages)
        if (payload.isChecked) {
          set.add(payload.damage.id)
        } else {
          set.delete(payload.damage.id)
        }
        selectedDamageComponentObj.damages = Array.from(set)
        state.currentContract!.inspection.damagedComponents.set(state.selectedDamagedComponent!, selectedDamageComponentObj!)
        state.currentContract! = { ...state.currentContract! };
      }
    },
    changeCommentInDamagedComponent: (state: Contracts, payload) => {
      const selectedDamageComponentObj = state.currentContract!.inspection.damagedComponents.get(state.selectedDamagedComponent!)
      selectedDamageComponentObj!.comment = payload
      state.currentContract! = { ...state.currentContract! };
    },
    resetCurrentContract: (state: Contracts) => state.currentContract = null
  },
  actions: {
    getContracts: async ({ commit }) => {
      commit('toggleLoading', true);
      const contracts = await ContractsService.getContracts();
      commit('setContracts', contracts);
      commit('toggleLoading', false);
    },
    getPhotosForDamages: async ({ commit, state }) => {
      commit('toggleLoading', true);
      if (state.currentContract) {
        state.currentContract.inspection.damagedComponents.forEach(
          (component, index) => {
            const photos = component.photos;
            const queryFetchPhotos = photos.map((photo) =>
              FileService.fetchFile(photo)
            );
            Promise.all(queryFetchPhotos).then((values) => {
              const result = values.map((value) => {
                const blob = new Blob([value]);
                return window.URL.createObjectURL(blob);
              });
              commit('setPhotoForDamage', { photos: result, index });
            });
          }
        );
      }
      commit('toggleLoading', false);
    },
  },
  getters: {
    currentContractInitialInspection: (state: Contracts) => {
      return state.currentContract!.inspection.initialInspection;
    },
    currentDamages: (state: Contracts) => {
      return state.currentContract!.inspection.damagedComponents;
    },
    selectedDamagedComponent: (state: Contracts) => {
      return state.currentContract!.inspection.damagedComponents.get(state.selectedDamagedComponent!)
    }
  },
  namespaced: true,
};
