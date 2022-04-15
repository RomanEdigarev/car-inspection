import { AuthHelperRepository } from './AuthHelperRepository';
import { RefreshTokenData, UserLoginData } from './model';
import { authHelper } from './AuthHelperRespositoryImpl';

class AuthHelper {
  private repository: AuthHelperRepository;

  constructor(repository: AuthHelperRepository) {
    this.repository = repository;
  }

  async login(loginData: UserLoginData) {
    await this.repository.login(loginData);
  }

  async refreshToken(refreshTokenData: RefreshTokenData) {
    await this.repository.refreshToken(refreshTokenData);
  }
}

export default new AuthHelper(authHelper);
