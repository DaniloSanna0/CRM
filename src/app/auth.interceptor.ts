import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from './service/login.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private log:LoginService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = this.log.getJWT()
    if (token){
      let newRequest = request.clone({
        headers: request.headers.append("Authentication", "Bearer " + token )
      })
      return next.handle(newRequest)
    }
    return next.handle(request);
  }
}
