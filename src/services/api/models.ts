// Alias Types
export type UserApiId = number
export type UserApiToken = string
export type UserApiRefreshToken = string
export enum UserApiRole {
  ROLE_ADMINISTRATOR = "ROLE_ADMINISTRATOR"
}
export type UserApiPermissions = string[]

export type UserApiLoginData = {
  login: string,
  password: string
}

export type UserApi = {
  userId: UserApiId;
  token: UserApiToken;
  refreshToken: UserApiRefreshToken;
  role: UserApiRole;
  permissions: UserApiPermissions;
}

export type RefreshTokenApiData = {
  refreshToken: string
}
