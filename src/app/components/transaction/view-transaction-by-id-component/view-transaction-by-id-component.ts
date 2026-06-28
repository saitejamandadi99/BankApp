import { AsyncPipe, CurrencyPipe, DatePipe, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { ITransaction } from '../../../models/transactions';
import { TransactionService } from '../../../services/transaction-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-transaction-by-id-component',
  imports: [ReactiveFormsModule, NgIf, AsyncPipe, DatePipe, CurrencyPipe],
  templateUrl: './view-transaction-by-id-component.html',
  styleUrl: './view-transaction-by-id-component.css',
})
export class ViewTransactionByIdComponent implements OnInit {
  transaction$:Observable<ITransaction> = of();
  id:number = 0;

  constructor(private service:TransactionService, private activatedRoute : ActivatedRoute){}
  ngOnInit(): void {
      this.id=this.activatedRoute.snapshot.params['id'];
      this.transaction$=this.service.getTransactionById(this.id); 
      this.transaction$.subscribe(data=>console.log(data))
  }

}
