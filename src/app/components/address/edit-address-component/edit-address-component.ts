import { AsyncPipe, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IAddress } from '../../../models/address';
import { Observable, of } from 'rxjs';
import { ICustomer } from '../../../models/customer';
import { CustomerService } from '../../../services/customer-service';
import { AddressService } from '../../../services/address-service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-edit-address-component',
  imports: [ReactiveFormsModule, NgIf, AsyncPipe],
  templateUrl: './edit-address-component.html',
  styleUrl: './edit-address-component.css',
})
export class EditAddressComponent  implements OnInit {
  address:IAddress={addressId:0, city:'', state:'', pincode:'', customerId:0};
  id:number = 0;
  lstCustomer$:Observable<ICustomer[]> = of([])

  addressForm:FormGroup = new FormGroup({
    addressId:new FormControl(0),
    city:new FormControl('', [Validators.required]),
    state:new FormControl('', [Validators.required]),
    pincode:new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
    customerId:new FormControl('', [Validators.required]),
  });

  get addressId() : FormControl{
    return this.addressForm.controls['addressId'] as FormControl
  }

  get city() : FormControl{
    return this.addressForm.controls['city'] as FormControl
  }

  get state() : FormControl{
    return this.addressForm.controls['state'] as FormControl
  }

  get pincode() : FormControl{
    return this.addressForm.controls['pincode'] as FormControl
  }

  get customerId() : FormControl{
    return this.addressForm.controls['customerId'] as FormControl
  }

  constructor(private custService : CustomerService, private addressService : AddressService, private router :Router, private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
      this.lstCustomer$ = this.custService.getCustomer();
      this.id= this.activatedRoute.snapshot.params['id'];
      this.addressService.getAddressById(this.id).subscribe(data=>{
        this.address = data;
        if(data!=null){
          this.addressForm.controls['addressId'].setValue(this.address?.addressId);
          this.addressForm.controls['city'].setValue(this.address?.city);
          this.addressForm.controls['state'].setValue(this.address?.state);
          this.addressForm.controls['pincode'].setValue(this.address?.pincode);
          this.addressForm.controls['customerId'].setValue(this.address?.customerId);
        }
      })
  }

  editAddress(){
    this.addressService.editAddress(this.id, this.addressForm.value as IAddress).subscribe({
      next:()=>{
        this.router.navigate(['viewaddresses'])
      }
    })
  }
}
