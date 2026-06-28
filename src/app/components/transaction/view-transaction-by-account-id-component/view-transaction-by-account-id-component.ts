import { AsyncPipe, CurrencyPipe, DatePipe, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ITransaction } from '../../../models/transactions';
import { TransactionService } from '../../../services/transaction-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-transaction-by-account-id-component',
  imports: [NgIf, AsyncPipe, CurrencyPipe, DatePipe],
  templateUrl: './view-transaction-by-account-id-component.html',
  styleUrl: './view-transaction-by-account-id-component.css',
})
export class ViewTransactionByAccountIdComponent implements OnInit {
  lstTransactions$:Observable<ITransaction[]> = of([]);
  id:number = 0;
  
  constructor(private service : TransactionService, private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
      this.id=this.activatedRoute.snapshot.params['id'];
      this.lstTransactions$ = this.service.getTransactionsByAccountId(this.id);
  }
}
