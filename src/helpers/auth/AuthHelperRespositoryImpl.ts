import { AuthHelperRepository } from './AuthHelperRepository';
import store from '@/store';
import { RefreshTokenData, UserLoginData } from '@/helpers/auth/model';

class AuthHelperRepositoryImpl implements AuthHelperRepository {
  async login(loginData: UserLoginData) {
    await store.dispatch('auth/fetchLogin', loginData);
  }
  async refreshToken(refreshTokenData: RefreshTokenData) {
    await store.dispatch('auth/fetchRefreshToken', refreshTokenData);
  }
}
export const authHelper = new AuthHelperRepositoryImpl();
