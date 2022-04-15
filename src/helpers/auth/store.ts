import { Module } from 'vuex';
import {
  Auth,
  RefreshTokenData,
  User,
  UserLoginData,
} from '@/helpers/auth/model';
import { State } from '@/store';
import AuthService from '@/services/api/auth-service/AuthService';
import LocalStorageService from '@/services/localStorage/LocalStorageService';

export const authModule: Module<Auth, State> = {
  state: () => ({
    isAuth: false,
    user: undefined,
    isLoading: false,
  }),
  mutations: {
    toggleAuth: (state: Auth, payload: boolean) => {
      state.isAuth = payload;
    },
    toggleLoading: (state: Auth, payload: boolean) => {
      state.isLoading = payload;
    },
    setUser: (state: Auth, payload: User) => {
      state.user = payload;
    },
    logout: (state: Auth) => {
      state.user = {} as User
      state.isAuth = false
      LocalStorageService.clear()
    }
  },
  actions: {
    async fetchLogin({ commit }, payload: UserLoginData) {
      commit('toggleLoading', true);
      const user = await AuthService.login(payload);
      if (user) {
        LocalStorageService.setAuthInfo(
          JSON.stringify({ token: user.token, refreshToken: user.refreshToken })
        );
        commit('setUser', user);
        commit('toggleAuth', true);
      } else {
        LocalStorageService.clear();
      }
      commit('toggleLoading', false);
    },
    async fetchRefreshToken({ commit }, payload: RefreshTokenData) {
      commit('toggleLoading', true);
      const user = await AuthService.refreshToken(payload);
      if (user) {
        LocalStorageService.setAuthInfo(
          JSON.stringify({ token: user.token, refreshToken: user.refreshToken })
        );
        commit('setUser', user);
        commit('toggleAuth', true);
      }
      commit('toggleLoading', false);
    },
  },
  namespaced: true,
};
