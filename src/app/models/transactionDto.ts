import { TransactionType } from "./Tranasctions_enum";

export interface ITransactionPerform{
    srcAccountId : number,
    destAccountId:number,
    transType: TransactionType,
    amount :number
}