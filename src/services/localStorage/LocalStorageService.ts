import { LocalStorageServiceRepository } from './LocalStorageServiceRepository';
import { localStorageRepo } from './LocalStorageServiceRepositoryImpl';

class LocalStorageService {
  private repository: LocalStorageServiceRepository;

  constructor(repository: LocalStorageServiceRepository) {
    this.repository = repository;
  }

  get isAuth() {
    return this.repository.isAuth();
  }

  getRefreshToken() {
    return this.repository.getRefreshToken()
  }

  getToken() {
    return this.repository.getToken()
  }

  setAuthInfo(authInfo: string) {
    this.repository.setAuthInfo(authInfo);
  }

  clear() {
    this.repository.clear()
  }

  setKey(key: string, value: unknown) {
    this.repository.setKey(key, value)
  }

  getValue(key: string) {
    this.repository.getValue(key)
  }
}

export default new LocalStorageService(localStorageRepo);
