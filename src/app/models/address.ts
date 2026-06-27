import { ICustomer } from "./customer"

export interface IAddress{
    addressId:number,
    city:string,
    state:string,
    pincode:string, 
    customerId : number
    customer?:ICustomer
}