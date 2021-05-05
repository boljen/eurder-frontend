import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService  {

  private _authToken: string = 'user-id-1';

  constructor() { }

  public get authToken(): string {
    return this._authToken;
  }

  public set authToken(token: string) {
    this._authToken = token;
  }

}
