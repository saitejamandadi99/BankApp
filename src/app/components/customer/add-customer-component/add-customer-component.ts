import { AsyncPipe, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { IUser } from '../../../models/user';
import { ICustomer } from '../../../models/customer';
import { CustomerService } from '../../../services/customer-service';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user-service';

@Component({
  selector: 'app-add-customer-component',
  imports: [ReactiveFormsModule, NgIf, AsyncPipe],
  templateUrl: './add-customer-component.html',
  styleUrl: './add-customer-component.css',
})
export class AddCustomerComponent implements OnInit {

  ageValidator(control:AbstractControl):ValidationErrors|null{
    const dob = new Date(control.value);
    const today = new Date();
    const age = today.getFullYear() - dob.getFullYear();
    if(age <18){
      return {minimumAge : true}
    }
    return null;
  }

  lstUsers$:Observable<IUser[]> = of([]);
  customer:ICustomer = {customerId:0, contactNo:'', emailId:'',dateOfBirth:new Date, userId:0};
  customerForm:FormGroup=new FormGroup({
    customerId: new FormControl(0),
    contactNo: new FormControl('', [Validators.required, Validators.pattern("^[6-9][0-9]{9}$")]),
    emailId:new FormControl('', [Validators.required, Validators.email]),
    dateOfBirth:new FormControl('', [Validators.required,this.ageValidator.bind(this)]), //add a customer validators for age >= 18
    userId:new FormControl('', [Validators.required])
  });

  get customerId():FormControl{
    return this.customerForm.controls['customerId'] as FormControl;
  }

  
  get contactNo():FormControl{
    return this.customerForm.controls['contactNo'] as FormControl;
  }

  
  get emailId():FormControl{
    return this.customerForm.controls['emailId'] as FormControl;
  }

  
  get dateOfBirth():FormControl{
    return this.customerForm.controls['dateOfBirth'] as FormControl;
  }

  
  get userId():FormControl{
    return this.customerForm.controls['userId'] as FormControl;
  }
  constructor(private userService : UserService , private service:CustomerService, private router:Router){}

  ngOnInit(): void {
      this.lstUsers$  = this.userService.getUsers();
  }

  addCustomer(){
    this.service.addCustomer(this.customerForm.value as ICustomer).subscribe({
      next: () => {
        this.router.navigate(['/viewcustomers']);
        }
    });

  }
}
