/*import { Injectable, Injector } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from './login/login.service';

@Injectable()

export class Interceptor implements HttpInterceptor {

    constructor(private injector: Injector) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       
        let loginService = this.injector.get(LoginService)
        console.log('interceptor loginService.getToken(): ' + loginService.getToken())        
        const request = req.clone({
            setHeaders: {
              Authorization: `Bearer ${loginService.getToken()}`
            }
          });
              
        console.log('interceptor request : ' + request.headers['authorization']);
        return next.handle(req)  
    }

} */