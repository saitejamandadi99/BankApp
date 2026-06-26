import { Injectable, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRole } from '../models/role';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn:'root'
})
export class RoleService {
    constructor(private http:HttpClient){}


    //get roles from the database 
    getRoles():Observable<IRole[]>{
        return this.http.get<IRole[]>(`${environment.apiUrl}/Role`) 
    }
}
