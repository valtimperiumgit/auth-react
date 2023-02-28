import { IUser } from "../user/IUser";

export interface LoginResponse{
    accessToken: string;
    refreshToken: string;
    user: IUser
}