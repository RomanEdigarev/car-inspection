import {UserApi} from "@/services/api/models";

export interface LocalStorageServiceRepository {
    isAuth(): boolean
    getToken(): string
    getRefreshToken(): string
    clear(): void
    setAuthInfo(auth: string): void
    setKey(key: string, value: unknown): void
    getValue(key: string): any
}
