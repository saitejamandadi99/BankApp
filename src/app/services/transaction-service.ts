import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITransaction } from '../models/transactions';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn:'root'
})
export class TransactionService {
    constructor(private http: HttpClient){}

    //get all transactions 

    getTransactions():Observable<ITransaction[]>{
        return this.http.get<ITransaction[]>(`${environment.apiUrl}/Transaction`);
    }

    //get transaction by transaction id 

    getTransactionsById(id:number):Observable<ITransaction>{
        return this.http.get<ITransaction>(`${environment.apiUrl}/Transaction/${id}`);
    } 

    //get transactions by account id 
    getTransactionsByAccountId(id:number):Observable<ITransaction[]>{
        return this.http.get<ITransaction[]>(`${environment.apiUrl}/Transaction/account/${id}`);
    }

    //get transactions by customer id

    
    getTransactionsByCustomerId(id:number):Observable<ITransaction[]>{
     
        return this.http.get<ITransaction[]>(`${environment.apiUrl}/Transaction/customer/${id}`);
    }


    //perform transaction 

    performTransaction(transaction:ITransaction):Observable<ITransaction>{
        return this.http.post<ITransaction>(`${environment.apiUrl}/Transaction/perform`, transaction);
    }

}
