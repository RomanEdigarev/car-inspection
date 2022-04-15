// Alias Types
export type UserId = number
export type UserToken = string
export type UserRefreshToken = string
export enum UserRole {
    ROLE_ADMINISTRATOR = "ROLE_ADMINISTRATOR"
}
export type UserPermissions = string[]

export type UserLoginData = {
    login: string,
    password: string
}

export type RefreshTokenData = {
    refreshToken: string
}


export type User = {
    userId: UserId;
    token: UserToken;
    refreshToken: UserRefreshToken;
    role: UserRole;
    permissions: UserPermissions[];
}

export type Auth = {
    isAuth: boolean,
    user: User | undefined,
    isLoading: boolean
}
