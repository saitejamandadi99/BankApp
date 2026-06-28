import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth-services';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-dashboard-component',
  imports: [RouterLink],
  templateUrl: './user-dashboard-component.html',
  styleUrl: './user-dashboard-component.css',
})
export class UserDashboardComponent implements OnInit {
  userName :string='';
  constructor(private authService: AuthService, private cdr:ChangeDetectorRef){}
 ngOnInit(): void {
     this.userName=this.authService.getUserName();
     this.cdr.detectChanges();
 }
}
