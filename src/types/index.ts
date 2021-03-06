import { REFRESH_TOKEN_COOKIE_KEY } from '../constants/auth';

export interface UpdateInfo {
  createdAt: Date;
  updatedAt: Date;
}

export interface UserLoginInfo {
  userId: string;
  password: string;
}

export type UserInfo = UserLoginInfo;

export interface RefreshCookie {
  [REFRESH_TOKEN_COOKIE_KEY]: string;
}
