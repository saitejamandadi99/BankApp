import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ITransaction } from '../../../models/transactions';
import { TransactionService } from '../../../services/transaction-service';
import { AsyncPipe, CurrencyPipe, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-view-transaction-component',
  imports: [AsyncPipe, RouterLink, DatePipe, CurrencyPipe],
  templateUrl: './view-transaction-component.html',
  styleUrl: './view-transaction-component.css',
})
export class ViewTransactionComponent implements OnInit {
  lstTransactions$:Observable<ITransaction[]> = of([]);

  constructor(private service : TransactionService){}
  ngOnInit(): void {
    this.lstTransactions$  = this.service.getTransactions();
    this.lstTransactions$.subscribe(data=>console.log(data));   
  }
}
