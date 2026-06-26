import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth-services';
import { Roles } from '../models/Roles_enum';

export const adminGuard: CanActivateFn = (route, state) => {
  const service = inject(AuthService);
  const router = inject(Router);
  if(service.getToken()){
    if(service.getRole() == Roles[Roles.Admin]){
      return true;
    }
    console.log('role is not valid');
    alert('role is not valid');
    return false;
  }
  router.navigate(['loginform']);
  return false;
};
