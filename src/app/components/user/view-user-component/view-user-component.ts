import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { IUser } from '../../../models/user';
import { UserService } from '../../../services/user-service';
import { OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-view-user-component',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './view-user-component.html',
  styleUrl: './view-user-component.css',
})
export class ViewUserComponent implements OnInit {
  lstUsers$:Observable<IUser[]> = of([]);

  constructor(private service:UserService){}

  ngOnInit(): void {
    this.lstUsers$= this.service.getUsers();
  }
}
