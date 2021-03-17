import { Injectable } from '@angular/core';
import {
  HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {
  // tslint:disable-next-line: typedef
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    req = req.clone({
      url: `${environment.apiUrl}${req.url}`,
      setParams: {
        apikey: environment.apiKey,
        ts: environment.ts,
        hash: environment.hash
      }
    });
    return next.handle(req);
  }
}
