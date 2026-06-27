import { IAccount } from "./accounts";
import { IAddress } from "./address";
import { ITransaction } from "./transactions";
import { IUser } from "./user";

export interface ICustomer{
    customerId : number, 
    emailId:string, 
    contactNo:string,
    dateOfBirth:Date,
    userId:number

    user?: IUser;
    address?: IAddress;
    accounts?: IAccount[];
    transactions?: ITransaction[];

}