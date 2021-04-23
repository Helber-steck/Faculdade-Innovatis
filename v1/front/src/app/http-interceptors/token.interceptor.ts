import { LoginServiceService } from './../views/login/login-service.service';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class TokenInterceptor  implements HttpInterceptor {
  
  intercept(request: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {

      const Token = localStorage.getItem('token'); 
      
      let newRequest: HttpRequest<any> = request;
      console.info(newRequest);

      newRequest = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${Token}`)
      });

      console.info(newRequest);

      return next.handle(newRequest);

    }
    
}