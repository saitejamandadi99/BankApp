import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IAddress } from '../../../models/address';
import { AddressService } from '../../../services/address-service';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-view-address-component',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './view-address-component.html',
  styleUrl: './view-address-component.css',
})
export class ViewAddressComponent implements OnInit {
  lstAddress$:Observable<IAddress[]> = of([]);
  constructor(private addressSrc : AddressService){}
  ngOnInit(): void {
      this.lstAddress$ = this.addressSrc.getAddress();

  }
}
