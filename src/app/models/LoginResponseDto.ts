import { IUser } from "./user";

export interface LoginResponseDto{
    isSuccess:boolean,
    user:IUser, 
    token : string
}