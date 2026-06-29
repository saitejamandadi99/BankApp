import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth-services';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar-component',
  imports: [RouterLink],
  templateUrl: './navbar-component.html',
  styleUrl: './navbar-component.css',
})
export class NavbarComponent {
  constructor(private authService:AuthService, private router:Router){}
  logout(){
    this.authService.logout();
    this.router.navigate(['loginform']);
    
  }

  goHome(){
    const role = this.authService.getRole();
    if(role==='Admin'){
      this.router.navigate(['/userdashboard'])
    }
    else if(role==='Customer'){
      this.router.navigate(['/customerdashboard'])
    }
    else{
      this.router.navigate(['/loginform'])
    }
  }
}
