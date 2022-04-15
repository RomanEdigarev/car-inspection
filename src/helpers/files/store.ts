import { Module } from 'vuex';
import { State } from '@/store';
import {Files} from "@/helpers/files/model";
import FileService from "@/services/api/file-service/FileService";

export const filesModule: Module<Files, State> = {
  state: () => ({
    photo:[],
    isLoading: false
  }),
  mutations: {
    toggleLoading: (state: Files, payload: boolean) => {
      state.isLoading = payload;
    },
  },
  actions: {
    sendFile: async ({commit}, file) => {
      commit('toggleLoading', true);
      const response = await FileService.sendFile(file)
      commit('toggleLoading', false);
    }
  },
  namespaced: true,
};
