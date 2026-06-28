import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ITransaction } from '../../../models/transactions';
import { TransactionService } from '../../../services/transaction-service';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe, CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-view-transaction-by-customer-id-component',
  imports: [AsyncPipe, DatePipe, CurrencyPipe],
  templateUrl: './view-transaction-by-customer-id-component.html',
  styleUrl: './view-transaction-by-customer-id-component.css',
})
export class ViewTransactionByCustomerIdComponent implements OnInit {
  lstTransactions$:Observable<ITransaction[]> = of([]);
  id:number = 0;

  constructor(private service:TransactionService, private activatedRoute:ActivatedRoute){}
  ngOnInit(): void {
      this.id=this.activatedRoute.snapshot.params['id'];
      this.lstTransactions$ = this.service.getTransactionsByCustomerId(this.id); 
  }

}
