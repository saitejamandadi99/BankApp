import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable, of } from 'rxjs';
import { IAccount } from '../../../models/accounts';
import { AccountService } from '../../../services/account-service';

@Component({
  selector: 'app-view-account-component',
  imports: [AsyncPipe,RouterLink],
  templateUrl: './view-account-component.html',
  styleUrl: './view-account-component.css',
})
export class ViewAccountComponent implements OnInit {
  lstAccounts$:Observable<IAccount[]> = of([]);

  
  constructor(private accountService:AccountService){}
  ngOnInit(): void {
    this.lstAccounts$=this.accountService.getAccounts();
    this.lstAccounts$.subscribe(data=>console.log(data)
    );
    
  }
}
