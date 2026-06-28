import { IAccount } from "./accounts";
import { ICustomer } from "./customer";
import { TransactionType } from "./Tranasctions_enum";

export interface ITransaction{
    transId:number, 
    transType:TransactionType,
    amount:number, 
    date:Date,
    accountId:number, 
    customerId:number, 
    account?:IAccount,
    customer?:ICustomer

}