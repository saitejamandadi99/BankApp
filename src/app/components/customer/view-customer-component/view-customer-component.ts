import { AsyncPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ICustomer } from '../../../models/customer';
import { CustomerService } from '../../../services/customer-service';

@Component({
  selector: 'app-view-customer-component',
  imports: [AsyncPipe, RouterLink, DatePipe],
  templateUrl: './view-customer-component.html',
  styleUrl: './view-customer-component.css',
})
export class ViewCustomerComponent implements OnInit {
  lstCustomers$ :Observable<ICustomer[]> = of([]);

  constructor(private service : CustomerService){}
  ngOnInit(): void {
      this.lstCustomers$=this.service.getCustomer();
  }

}