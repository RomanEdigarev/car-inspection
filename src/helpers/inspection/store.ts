import { Module } from 'vuex';
import { State } from '@/store';
import {
  Damage,
  InitialInspection,
  Inspection,
  InspectionFormBlock,
  InspectionParameter,
  InspectionScript,
} from '@/helpers/inspection/model';
import InspectionService from '@/services/api/inspection-service/InspectionService';
import { InitialInspectionApi } from '@/services/api/models/Inspection';
import InspectionHelper from '@/helpers/inspection/InspectionHelper';
import * as path from 'path';
import FileService from "@/services/api/file-service/FileService";

export const inspectionModule: Module<Inspection, State> = {
  state: () => ({
    allParams: {},
    allParamsByText: {},
    isLoading: false,
    initialInspection: {},
    form: [],
    script: {} as InspectionScript,
  }),
  mutations: {
    toggleLoading: (state: Inspection, payload: boolean) => {
      state.isLoading = payload;
    },
    setAllParams: (state: Inspection, payload) => {
      state.allParams = payload;
    },
    setAllParamsByText: (state: Inspection, payload) => {
      state.allParamsByText = payload;
    },
    setInitialInspection: (state: Inspection, payload) => {
      state.initialInspection = payload;
    },
    setInitFrom: (state: Inspection, payload) => {
      if (Array.isArray(payload)) {
        state.form = [...payload];
      } else state.form.push(payload);
    },
    resetForm: (state: Inspection) => {
      state.form = [];
    },
    setNewValueInForm: (state: Inspection, payload) => {
      state.form[payload.indexInForm][payload.indexInBlock].value =
        payload.value;
    },
    setInspectionScript: (state: Inspection, payload: InspectionScript) => {
      state.script = payload;
    },
  },
  actions: {
    getAllParams: async ({ commit }) => {
      commit('toggleLoading', true);
      let allParams = await InspectionService.getAllParams();
      let map: { [key: string]: InspectionParameter } = {};
      let mapByText: { [key: string]: InspectionParameter } = {};
      if (allParams) {
        allParams.forEach((item) => {
          mapByText[item.name as string] = {
            id: item.id,
            name: item.name,
            values: item.values.map((value) => {
              return {
                id: value.id as string,
                name: value.name as string,
                type: {
                  textRequired: value.textRequired,
                  textVisible: value.textVisible,
                },
              };
            }),
          };
        });
      }

      commit('setAllParams', map);
      commit('setAllParamsByText', mapByText);
      commit('toggleLoading', false);
    },
    getInitialInspection: async ({ commit }, payload: string) => {
      commit('toggleLoading', true);
      const inspection = await InspectionService.getInitialInspection(payload);
      let map: { [key: string]: InitialInspectionApi } = {};
      if (inspection) {
        inspection.initialInspection.forEach((item) => {
          map[item.parameter as string] = item;
        });
      }
      commit('setInitialInspection', map);
      commit('toggleLoading', false);
    },
    getInspectionScript: async ({ commit }) => {
      const inspectionScript = await InspectionService.getInspectionScript();
      const damagesMap = new Map();
      const componentsMap = new Map();
      if (inspectionScript) {
        inspectionScript.damages.forEach((damage) => {
          damagesMap.set(damage.id, damage);
        });
        inspectionScript.components.forEach((component) => {
          componentsMap.set(component.id, component);
        });
      }
      commit('setInspectionScript', {
        damages: damagesMap,
        components: componentsMap,
      });

      commit('toggleLoading', false);
    },
  },
  getters: {
    getAllParams: (state: Inspection) => {
      return state.allParams;
    },
    getInspectionScript: (state: Inspection) => {
      return state.script;
    },
    getInitialInspection: (state: Inspection) => {
      return state.initialInspection
    }
  },
  namespaced: true,
};
