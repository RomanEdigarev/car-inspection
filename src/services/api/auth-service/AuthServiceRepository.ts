import {UserApi} from "@/services/api/models";

export interface AuthServiceRepository {
    login(login: string, password: string): Promise<UserApi | null>
    refreshToken(prevRefreshToken: string): Promise<UserApi | null>
}
