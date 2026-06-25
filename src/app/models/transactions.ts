import { TransactionType } from "./Tranasctions_enum";

export interface ITransaction{
    transId:number, 
    transType:TransactionType,
    amount:number, 
    date:Date,
    accountId:number, 
}