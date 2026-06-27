import { Routes } from '@angular/router';
import { LoginComponent } from './components/login-component/login-component';
import { ViewUserComponent } from './components/user/view-user-component/view-user-component';
import { adminGuard } from './guards/admin-guard';
import { AddUserComponent } from './components/user/add-user-component/add-user-component';
import { EditUserComponent } from './components/user/edit-user-component/edit-user-component';
import { DeleteUserComponent } from './components/user/delete-user-component/delete-user-component';
import { ViewCustomerComponent } from './components/customer/view-customer-component/view-customer-component';
import { AddCustomerComponent } from './components/customer/add-customer-component/add-customer-component';
import { EditCustomerComponent } from './components/customer/edit-customer-component/edit-customer-component';
import { DeleteCustomerComponent } from './components/customer/delete-customer-component/delete-customer-component';
import { ViewAddressComponent } from './components/address/view-address-component/view-address-component';
import { AddAddressComponent } from './components/address/add-address-component/add-address-component';
import { EditAddressComponent } from './components/address/edit-address-component/edit-address-component';
import { DeleteAddressComponent } from './components/address/delete-address-component/delete-address-component';

export const routes: Routes = [
    {path:'loginform', component:LoginComponent},

    //user routers - admin access only 
    {path:'viewusers', component:ViewUserComponent, canActivate:[adminGuard]},
    {path:'adduser', component:AddUserComponent, canActivate:[adminGuard]},
    {path:'edituser/:id', component:EditUserComponent, canActivate:[adminGuard]},
    {path:'deleteuser/:id', component:DeleteUserComponent, canActivate:[adminGuard]},
    
    //customer 
    {path:'viewcustomers', component:ViewCustomerComponent, canActivate:[adminGuard]},
    {path:'addcustomer', component:AddCustomerComponent, canActivate:[adminGuard]},
    {path:'editcustomer/:id', component:EditCustomerComponent, canActivate:[adminGuard]},
    {path:'deletecustomer/:id', component:DeleteCustomerComponent, canActivate:[adminGuard]},

    //address 
    {path:'viewaddresses', component:ViewAddressComponent, canActivate:[adminGuard]},
    {path:'addaddress', component:AddAddressComponent, canActivate:[adminGuard]},
    {path:'editaddress/:id', component:EditAddressComponent, canActivate:[adminGuard]},
    {path:'deleteaddress/:id', component:DeleteAddressComponent, canActivate:[adminGuard]},
];
