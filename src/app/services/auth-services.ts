import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequestDto } from '../models/LoginRequestDto';
import { Observable } from 'rxjs';
import { LoginResponseDto } from '../models/LoginResponseDto';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn:'root'
})
export class AuthService {
    constructor(private http:HttpClient){}

    //login user 
    loginUser(loginRequest : LoginRequestDto):Observable<LoginResponseDto>{
        return this.http.post<LoginResponseDto>(`${environment.apiUrl}/Auth/login`, loginRequest);
    }

    // save token 

    saveToken(loginResponse: LoginResponseDto){
        localStorage.setItem('token', loginResponse.token);
        const payloadBase64 = loginResponse.token.split('.')[1];
        const decodePayload = JSON.parse(atob(payloadBase64)); //ascii to binary

        localStorage.setItem('role', decodePayload['role']);
    }
    // get token 
    getToken(){
        let token = localStorage.getItem('token');
        return token;
    }
    //get role 
    getRole(){
        
        let role = localStorage.getItem('role');
        return role;
    }

    isLoggedIn():boolean{
        return localStorage.getItem('token') !== null;
    }

    
    logout(){
        localStorage.removeItem('token');
        localStorage.removeItem('role');
    }
    
}
