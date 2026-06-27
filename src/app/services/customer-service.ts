import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICustomer } from '../models/customer';
import { environment } from '../../environments/environment';


@Injectable({
    providedIn:'root'
})
export class CustomerService {
    constructor(private http:HttpClient){}
    
    //get all customers 
    getCustomer():Observable<ICustomer[]>{
        return this.http.get<ICustomer[]>(`${environment.apiUrl}/Customer`);
    }

    //add a customer 
    addCustomer(customer:ICustomer):Observable<ICustomer>{
        return this.http.post<ICustomer>(`${environment.apiUrl}/Customer`,customer );
    }

    //edit a customer 
    editCustomer(id:number, customer:ICustomer):Observable<ICustomer>{
        console.log("hitting the customer to edit ", customer);
        
        return this.http.put<ICustomer>(`${environment.apiUrl}/Customer/${id}`,customer );
    }

    //get customer by customer id 
    getCustomerById(id:number):Observable<ICustomer>{
        return this.http.get<ICustomer>(`${environment.apiUrl}/Customer/${id}` );
    }

    //delete customer by customer id
    deleteCustomer(id:number):Observable<void>{
        return this.http.delete<void>(`${environment.apiUrl}/Customer/${id}`);
    }
}
