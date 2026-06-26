import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth-services';

//used to check where the route is accessed by authenticated user

export const authGuard: CanActivateFn = (route, state) => {
  const service = inject(AuthService);
  const router = inject(Router);
  if(service.getToken()){

    return true;
  }
  router.navigate(['loginform'])
  return false
};
