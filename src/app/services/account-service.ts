import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAccount } from '../models/accounts';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn:'root'
})
export class AccountService {
    constructor(private http:HttpClient){

    }

    //get all accounts

    getAccounts():Observable<IAccount[]>{
        return this.http.get<IAccount[]>(`${environment.apiUrl}/Account`);
    }

    //add  account 

    addAccount(account : IAccount):Observable<IAccount>{
        return this.http.post<IAccount>(`${environment.apiUrl}/Account`, account);
    }
    //edit account by id 

    editAccount(id:number, account:IAccount):Observable<IAccount>{
        return this.http.put<IAccount>(`${environment.apiUrl}/Account/${id}`, account);
    }

    //get account by acount id

    getAccountById(id:number):Observable<IAccount>{
        return  this.http.get<IAccount>(`${environment.apiUrl}/Account/${id}`);
    }
    //get accounts by customer id
    
    getAccountByCustomerId(id:number):Observable<IAccount[]>{
        return this.http.get<IAccount[]>(`${environment.apiUrl}/Account/Customer/${id}`);
    }

    //delete account by id

    deleteAccount(id:number):Observable<void>{
        return this.http.delete<void>(`${environment.apiUrl}/Account/${id}`)
    }
}
