import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAddress } from '../models/address';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn:'root'
})
export class AddressService {
    constructor(private http:HttpClient){}

    //get all address 

    getAddress():Observable<IAddress[]>{
        return this.http.get<IAddress[]>(`${environment.apiUrl}/Address`);
    }

    //post  address 

    addAddress(address : IAddress):Observable<IAddress>{
        return this.http.post<IAddress>(`${environment.apiUrl}/Address`, address);
    }

    //edit  address by id 

    editAddress(id:number, address:IAddress):Observable<IAddress>{
        return this.http.put<IAddress>(`${environment.apiUrl}/Address/${id}`, address)
    }

    //get address by iid

    getAddressById(id:number):Observable<IAddress>{
        return this.http.get<IAddress>(`${environment.apiUrl}/Address/${id}`);
    }

    //delete  address by id 

    deleteAddress(id:number):Observable<void>{
        return this.http.delete<void>(`${environment.apiUrl}/Address/${id}`);
    }
}
