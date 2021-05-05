import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService  {

  public authToken = 'user-id-1';

  constructor() { }

}
