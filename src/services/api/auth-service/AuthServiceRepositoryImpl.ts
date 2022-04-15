import { AuthServiceRepository } from '@/services/api/auth-service/AuthServiceRepository';
import { UserApi } from '@/services/api/models';
import { client } from '@/services/api/client';

class AuthServiceRepositoryImpl implements AuthServiceRepository {
  async login(login: string, password: string): Promise<UserApi | null> {
    try {
      const response = await client.post<UserApi>('tokens', {
        login,
        password,
      });
      return response.data;
    } catch (error) {
      return null;
    }
  }

  async refreshToken(prevRefreshToken: string): Promise<UserApi | null> {
    try {
      const response = await client.put<UserApi>('tokens', {
        refreshToken: prevRefreshToken
      });
      return response.data;
    } catch (error) {
      return null;
    }
  }
}

export const authRepo = new AuthServiceRepositoryImpl();
