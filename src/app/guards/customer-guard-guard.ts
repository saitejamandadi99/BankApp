import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth-services';
import { InjectSetupWrapper } from '@angular/core/testing';

export const customerGuardGuard: CanActivateFn = (route, state) => {
  const service= inject(AuthService);
  const router = inject(Router);
  if(service.isLoggedIn() && service.getRole() == 'Customer'){
    return true;
  }
  router.navigate(['/loginform']);
  return true;
};
