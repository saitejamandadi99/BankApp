import { ICustomer } from "./customer";

export interface IAccount{
    accountId : number,
    accountNumber: string, 
    accountType:string,
    balance :number, 
    customerId:number,
    customer?:ICustomer,

}