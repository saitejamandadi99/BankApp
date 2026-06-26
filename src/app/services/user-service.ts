import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../models/user';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn:'root'
})
export class UserService {
    constructor(private http:HttpClient){}

    //get users from the db 
    getUsers():Observable<IUser[]>{
        return this.http.get<IUser[]>(`${environment.apiUrl}/User`);
    }

    addUser(user:IUser):Observable<IUser>{
        return this.http.post<IUser>(`${environment.apiUrl}/User`,user);
    }

    
    getUserById(id : number):Observable<IUser>{
        return this.http.get<IUser>(`${environment.apiUrl}/User/${id}`);
    }

    
    editUser(id:number, user:IUser):Observable<IUser>{
        return this.http.put<IUser>(`${environment.apiUrl}/User/${id}`,user);
    }

    
    deleteUser(id:number):Observable<void>{  //void  because the nocontent and notfound 
        return this.http.delete<void>(`${environment.apiUrl}/User/${id}`);
    }
}
