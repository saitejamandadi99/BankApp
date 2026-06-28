import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ICustomer } from '../../../models/customer';
import { AccountService } from '../../../services/account-service';
import { AuthService } from '../../../services/auth-services';
import { CustomerService } from '../../../services/customer-service';
import { IAccount } from '../../../models/accounts';
import { AsyncPipe, CurrencyPipe, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-customer-dashboard-component',
  standalone: true,
  imports: [AsyncPipe, DatePipe, CurrencyPipe, RouterLink],
  templateUrl: './customer-dashboard-component.html',
  styleUrl: './customer-dashboard-component.css',
})
export class CustomerDashboardComponent implements OnInit {
  lstAccounts$:Observable<IAccount[]> = of([]);
  customerId:number=0;
  userName :string ='';
  
  constructor(private authService:AuthService,private customerService:CustomerService,  private accountService:AccountService, private cdr : ChangeDetectorRef){}

  ngOnInit(): void {
      const userId = this.authService.getUserId();
      this.userName = this.authService.getUserName();
      this.customerService.getCustomerByUserId(userId).subscribe(customer=>{
        this.customerId = customer.customerId;
        console.log("Customer Id:", this.customerId);
        console.log("Customer customerId:", customer.customerId);
        this.lstAccounts$ = this.accountService.getAccountByCustomerId(customer.customerId);
        this.cdr.detectChanges();
      })
  }
}
