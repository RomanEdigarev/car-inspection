import { AuthServiceRepository } from './AuthServiceRepository';
import { authRepo } from './AuthServiceRepositoryImpl';
import {
  RefreshTokenApiData,
  UserApi,
  UserApiLoginData,
} from '@/services/api/models';

class AuthService {
  private repository: AuthServiceRepository;

  constructor(repository: AuthServiceRepository) {
    this.repository = repository;
  }

  async login({ login, password }: UserApiLoginData): Promise<UserApi | null> {
    return await this.repository.login(login, password);
  }

  async refreshToken({ refreshToken }: RefreshTokenApiData): Promise<UserApi | null> {
    return await this.repository.refreshToken(refreshToken);
  }
}

export default new AuthService(authRepo);
