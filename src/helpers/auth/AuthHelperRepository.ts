import { RefreshTokenData, UserLoginData } from './model';

export interface AuthHelperRepository {
  login(loginData: UserLoginData): Promise<unknown>;
  refreshToken(refreshTokenData: RefreshTokenData): void;
}
