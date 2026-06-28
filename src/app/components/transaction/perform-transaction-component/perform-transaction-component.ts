import { AsyncPipe, CurrencyPipe, NgIf } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { IAccount } from '../../../models/accounts';
import { ITransactionPerform } from '../../../models/transactionDto';
import { TransactionType } from '../../../models/Tranasctions_enum';
import { AccountService } from '../../../services/account-service';
import { TransactionService } from '../../../services/transaction-service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../services/auth-services';
import { CustomerService } from '../../../services/customer-service';

@Component({
  selector: 'app-perform-transaction-component',
  imports: [ReactiveFormsModule, NgIf, AsyncPipe,CurrencyPipe],
  templateUrl: './perform-transaction-component.html',
  styleUrl: './perform-transaction-component.css',
})
export class PerformTransactionComponent implements OnInit {
  lstAccounts$ :Observable<IAccount[]> = of([]);
  customerId:number= 0;
  transaction:ITransactionPerform = {srcAccountId:0, destAccountId:0, amount:0, transType:TransactionType.Debit};
  isProcessing=false;
  transactionForm:FormGroup= new FormGroup({
    srcAccountId:new FormControl(0, [Validators.required]),
    destAccountId:new FormControl(0, [Validators.required]),
    amount:new FormControl(0, [Validators.required,Validators.min(1)]),
    transType:new FormControl(0),
  })

  get srcAccountId():FormControl{
    return this.transactionForm.controls['srcAccountId'] as FormControl;
  }

  
  get destAccountId():FormControl{
    return this.transactionForm.controls['destAccountId'] as FormControl;
  }

  
  get amount():FormControl{
    return this.transactionForm.controls['amount'] as FormControl;
  }

  
  get transType():FormControl{
    return this.transactionForm.controls['transType'] as FormControl;
  }
  constructor(private cdr:ChangeDetectorRef, private authSerivce : AuthService,private cusService:CustomerService , private accService:AccountService, private transactionService: TransactionService, private activatedRoute:ActivatedRoute, private router:Router){}
  ngOnInit(): void {
    const userId = this.authSerivce.getUserId();
    this.cusService.getCustomerByUserId(userId).subscribe(customer=>{
      this.customerId = customer.customerId;;
      this.lstAccounts$ = this.accService.getAccountByCustomerId(customer.customerId);
      this.cdr.detectChanges();
    })

  }

  performTransaction(){
    this.isProcessing = true;
    this.transactionService.performTransaction(this.transactionForm.value as ITransactionPerform).subscribe({
      next:()=>{
        
        alert('Transaction Success')
        this.router.navigate(['customerdashboard'])
      }
    });
  }


}
