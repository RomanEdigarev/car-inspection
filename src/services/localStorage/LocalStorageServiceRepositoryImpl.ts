import { LocalStorageServiceRepository } from './LocalStorageServiceRepository';

class LocalStorageServiceRepositoryImpl
  implements LocalStorageServiceRepository
{
  setAuthInfo(auth: string) {
    localStorage.setItem('auth', auth);
  }

  getRefreshToken(): string {
    const authInfo = JSON.parse(localStorage.getItem('auth') as string);
    return authInfo.refreshToken;
  }

  getToken(): string {
    const authInfo = JSON.parse(localStorage.getItem('auth') as string);
    return authInfo.token;
  }

  clear() {
    localStorage.clear();
  }

  isAuth(): boolean {
    if (localStorage.getItem('auth')) {
      const authInfo = JSON.parse(localStorage.getItem('auth')!);
      return authInfo.token && authInfo.refreshToken;
    } else {
      return false;
    }
  }

  setKey(key: string, value: unknown) {
    if (typeof value === 'string') {
      localStorage.setItem(key, value);
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }

  getValue(key: string) {
    if (localStorage.getItem(key)) {
      return JSON.parse(localStorage.getItem(key)!)
    } else {
      return null
    }
  }
}

export const localStorageRepo = new LocalStorageServiceRepositoryImpl();
