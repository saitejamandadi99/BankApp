
import { IPassbookTransaction } from "./passbookTransaction";
import { ITransaction } from "./transactions";

export interface IPassbook{
    accountId:number, 
    accountNumber:string,
    currentBalance:number, 
    transactions:IPassbookTransaction[]
}