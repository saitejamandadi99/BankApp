import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth-services';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const service = inject(AuthService);
  const token = service.getToken();
  console.log('token found');

  if(token){
    const cloned = req.clone({
      setHeaders:{
        Authorization:`Bearer ${token}`
      }
    });
    return next(cloned);
  }
  console.log('no token found for the interceptor req');
  
  return next(req);
};
