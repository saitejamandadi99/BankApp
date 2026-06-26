import { AsyncPipe, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IUser } from '../../../models/user';
import { UserService } from '../../../services/user-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Roles } from '../../../models/Roles_enum';
import { Observable, of } from 'rxjs';
import { IRole } from '../../../models/role';
import { RoleService } from '../../../services/role-service';

@Component({
  selector: 'app-add-user-component',
  imports: [ReactiveFormsModule, NgIf, AsyncPipe],
  templateUrl: './add-user-component.html',
  styleUrl: './add-user-component.css',
})
export class AddUserComponent implements OnInit {
  user:IUser={userId:0, userName:'', password:'', roleId:0};
  roles$:Observable<IRole[]> = of([]);
  userForm:FormGroup = new FormGroup({
    userId:new FormControl(),
    userName:new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
    password:new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z0-9]{3,10}$/)]),
    roleId:new FormControl(null, [Validators.required]),
  });

  get userId():FormControl{
    return this.userForm.controls['userId'] as FormControl;
  }

  
  get userName():FormControl{
    return this.userForm.controls['userName'] as FormControl;
  }

  
  get password():FormControl{
    return this.userForm.controls['password'] as FormControl;
  }

  
  get roleId():FormControl{
    return this.userForm.controls['roleId'] as FormControl;
  }

  constructor(private roleService : RoleService, private service : UserService, private activatedRoute: ActivatedRoute, private router:Router){}

  ngOnInit(): void {
      this.roles$ = this.roleService.getRoles();
  }


  addUser(){
    console.log('hitting add user method');
    
    this.service.addUser(this.userForm.value as IUser).subscribe();
    this.router.navigate(['viewusers']);
  }
}
