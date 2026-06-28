import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth-services';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { LoginRequestDto } from '../../models/LoginRequestDto';
import { LoginResponseDto } from '../../models/LoginResponseDto';

@Component({
  selector: 'app-login-component',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css',
})
export class LoginComponent {
  loginResponse$: Observable<LoginResponseDto> = of();
  loginError='';


  loginForm:FormGroup = new FormGroup({
    userName:new FormControl('', [Validators.required]),
    password:new FormControl('', [Validators.required]) 
  });


  constructor(private authService:AuthService, private router:Router){}

  loginUser(){
    this.loginResponse$ = this.authService.loginUser(this.loginForm.value)
    this.loginResponse$.subscribe(data => {
    console.log("login data:", data);
    this.authService.saveToken(data);
    const role = this.authService.getRole();
    if (role === 'Admin') {
        this.router.navigate(['/userdashboard']);   // or your admin dashboard
      }
      else if (role === 'Customer') {
        this.router.navigate(['/customerdashboard']);
      }
    },
    err => {
      this.loginError = 'Username or password is invalid';
      console.log(err);
    }
    );
  }

  getUserName():FormControl{
    return this.loginForm.controls['userName'] as FormControl;
  }

  getPassword():FormControl{
    return this.loginForm.controls['password'] as FormControl;
  }
}
