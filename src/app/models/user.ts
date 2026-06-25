import { Roles } from "./Roles_enum";

export interface IUser{
    userId: number,
    username:string,
    password:string,
    roleId:number
}