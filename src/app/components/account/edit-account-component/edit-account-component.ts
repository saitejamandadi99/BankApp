import { AsyncPipe, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { ICustomer } from '../../../models/customer';
import { CustomerService } from '../../../services/customer-service';
import { AccountService } from '../../../services/account-service';
import { ActivatedRoute, Router } from '@angular/router';
import { IAccount } from '../../../models/accounts';

@Component({
  selector: 'app-edit-account-component',
  imports: [ReactiveFormsModule,NgIf, AsyncPipe],
  templateUrl: './edit-account-component.html',
  styleUrl: './edit-account-component.css',
})
export class EditAccountComponent  implements OnInit {
  account :IAccount = {accountId:0, accountNumber:'', accountType:'', balance:0, customerId:0};
  id:number = 0;
  lstCustomers$:Observable<ICustomer[]>= of([]);
  accountForm:FormGroup = new FormGroup({
    accountId:new FormControl(0),
    accountNumber:new FormControl('', [Validators.required]),
    accountType:new FormControl('', [Validators.required]),
    balance:new FormControl('', [Validators.required]),
    customerId:new FormControl(0,[Validators.required]),
  })

  
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


  constructor(private customerService: CustomerService, private accountService:AccountService,private activatedRoute : ActivatedRoute, private router:Router){}

  ngOnInit(): void {
      this.lstCustomers$ = this.customerService.getCustomer();
      this.id = this.activatedRoute.snapshot.params['id'];
      this.accountService.getAccountById(this.id).subscribe(data=>{
        this.account = data;
        if(data!=null){

          this.accountForm.controls['accountId'].setValue(this.account?.accountId);
          this.accountForm.controls['accountNumber'].setValue(this.account?.accountNumber);
          this.accountForm.controls['accountType'].setValue(this.account?.accountType);
          this.accountForm.controls['balance'].setValue(this.account?.balance);
          this.accountForm.controls['customerId'].setValue(this.account?.customerId);
        }
      })
  }

  editAccount(){
    this.accountService.editAccount(this.id, this.accountForm.value as IAccount).subscribe({
      next:()=>{
        this.router.navigate(['viewaccounts']);
      }
    });
  }

}
