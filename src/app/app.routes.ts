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
import { ViewAccountComponent } from './components/account/view-account-component/view-account-component';
import { AddAccountComponent } from './components/account/add-account-component/add-account-component';
import { EditAccountComponent } from './components/account/edit-account-component/edit-account-component';
import { DeleteAccountComponent } from './components/account/delete-account-component/delete-account-component';
import { ViewTransactionComponent } from './components/transaction/view-transaction-component/view-transaction-component';
import { PassbookComponent } from './components/account/passbook-component/passbook-component';
import { PerformTransactionComponent } from './components/transaction/perform-transaction-component/perform-transaction-component';
import { ViewTransactionByIdComponent } from './components/transaction/view-transaction-by-id-component/view-transaction-by-id-component';
import { CustomerDashboardComponent } from './components/customer/customer-dashboard-component/customer-dashboard-component';
import { ViewTransactionByCustomerIdComponent } from './components/transaction/view-transaction-by-customer-id-component/view-transaction-by-customer-id-component';
import { ViewTransactionByAccountIdComponent } from './components/transaction/view-transaction-by-account-id-component/view-transaction-by-account-id-component';
import { customerGuardGuard } from './guards/customer-guard-guard';
import { UserDashboardComponent } from './components/user/user-dashboard-component/user-dashboard-component';
import { ErrorPageComponent } from './components/Error/error-page-component/error-page-component';

export const routes: Routes = [
    {path:'', component:LoginComponent},
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

    //accounts 
    {path:'viewaccounts',component:ViewAccountComponent, canActivate:[adminGuard]},
    {path:'addaccount',component:AddAccountComponent, canActivate:[adminGuard]},
    {path:'editaccount/:id',component:EditAccountComponent, canActivate:[adminGuard]},
    {path:'deleteaccount/:id',component:DeleteAccountComponent, canActivate:[adminGuard]},
    {path:'passbook/:id',component:PassbookComponent, canActivate:[customerGuardGuard]},

    //transaction 
    {path:'viewtransactions', component:ViewTransactionComponent, canActivate:[adminGuard]},
    {path:'viewtransactionbyid/:id', component:ViewTransactionByIdComponent, canActivate:[adminGuard]},
    {path:'viewtransactionbycustomerid/:id', component:ViewTransactionByCustomerIdComponent, canActivate:[customerGuardGuard]},
    {path:'viewtransactionbyaccountid/:id', component:ViewTransactionByAccountIdComponent, canActivate:[adminGuard]},
    {path:'performtransaction', component:PerformTransactionComponent, canActivate:[customerGuardGuard]},

    //dashboard

    {path:'customerdashboard', component:CustomerDashboardComponent, canActivate:[customerGuardGuard]},
    {path:'userdashboard', component:UserDashboardComponent, canActivate:[adminGuard]},
    {path:'**', component:ErrorPageComponent},


];
