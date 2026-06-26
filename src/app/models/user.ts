import { ICustomer } from "./customer";
import { IRole } from "./role";
import { Roles } from "./Roles_enum";

export interface IUser{
    userId: number,
    userName:string,
    password:string,
    roleId:number
    role?:IRole,
    customer?:ICustomer
}