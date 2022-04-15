import Vue from 'vue';
import Vuex from 'vuex';

// import Models
import { Auth, Contracts, Inspection, Files } from '@/helpers/models';

// import Modules
import {
  authModule,
  contractsModule, filesModule,
  inspectionModule,
} from '@/helpers/modules';

Vue.use(Vuex);

export type State = {
  auth: Auth;
  contracts: Contracts;
  inspection: Inspection;
  files: Files,
  isGlobalLoading: boolean;
  errors: any[];
};

export default new Vuex.Store({
  state: () => ({
    auth: {} as Auth,
    contracts: {} as Contracts,
    inspection: {} as Inspection,
    files: {} as Files,
    isGlobalLoading: false,
    errors: [],
  }),
  mutations: {
    setGlobalLoading: (state: State, payload: boolean) => {
      state.isGlobalLoading = payload;
    },
    addError: (state: State, payload: unknown) => {
      state.errors.push(payload);
    },
  },
  getters: {
    errors: (state: State) => {
      return state.errors;
    },
  },
  modules: {
    auth: authModule,
    contracts: contractsModule,
    inspection: inspectionModule,
    files: filesModule,
  },
});
