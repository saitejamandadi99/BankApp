import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IPassbook } from '../../../models/passbook';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../../../services/account-service';
import { AsyncPipe, CurrencyPipe, DatePipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-passbook-component',
  imports: [CurrencyPipe, AsyncPipe, DatePipe, NgIf],
  templateUrl: './passbook-component.html',
  styleUrl: './passbook-component.css',
})
export class PassbookComponent implements OnInit {

  passbook$: Observable<IPassbook> = of();
  id: number = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private accService: AccountService
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.passbook$ = this.accService.getPassbook(this.id);
  }

}