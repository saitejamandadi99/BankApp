import { AsyncPipe, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { ICustomer } from '../../../models/customer';
import { CustomerService } from '../../../services/customer-service';
import { AccountService } from '../../../services/account-service';
import { Router } from '@angular/router';
import { IAccount } from '../../../models/accounts';

@Component({
  selector: 'app-add-account-component',
  imports: [ReactiveFormsModule,NgIf, AsyncPipe],
  templateUrl: './add-account-component.html',
  styleUrl: './add-account-component.css',
})
export class AddAccountComponent implements OnInit {
  lstCustomers$:Observable<ICustomer[]>= of([]);
  accountForm:FormGroup = new FormGroup({
    accountId:new FormControl(0),
    accountNumber:new FormControl('', [Validators.required]),
    accountType:new FormControl('', [Validators.required]),
    balance:new FormControl('', [Validators.required]),
    customerId:new FormControl(0,[Validators.required]),
  });

  get accountId() : FormControl{
    return this.accountForm.controls['accountId'] as FormControl;
  }

  
  get accountNumber() : FormControl{
    return this.accountForm.controls['accountNumber'] as FormControl;
  }

  
  get accountType() : FormControl{
    return this.accountForm.controls['accountType'] as FormControl;
  }

  
  get balance() : FormControl{
    return this.accountForm.controls['balance'] as FormControl;
  }

  
  get customerId() : FormControl{
    return this.accountForm.controls['customerId'] as FormControl;
  }

  constructor(private customerService: CustomerService, private accountService:AccountService, private router:Router){}

  ngOnInit(): void {
      this.lstCustomers$ = this.customerService.getCustomer();
  }

  addAccount(){
    this.accountService.addAccount(this.accountForm.value as IAccount).subscribe({
      next:()=>{
        this.router.navigate(['viewaccounts']);
      }
    });
  }

}
