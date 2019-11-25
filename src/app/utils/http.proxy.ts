import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { LoginService } from '../login/login.service';

export interface HttpRequestOptions {
  headers?: HttpHeaders | {
      [header: string]: string | string[];
  };
  observe?: 'body';
  params?: HttpParams | {
      [param: string]: string | string[];
  };
  reportProgress?: boolean;
  withCredentials?: boolean;
}

@Injectable()
export class HttpProxy {
  constructor(private http: HttpClient, private login: LoginService) {}
 
  get(url: string, data: any, options: HttpRequestOptions = {}) {
    const token = this.login.getToken();
    const user = this.login.getUserInfo().user;
    // condition ? TRUE : FALSE 
    // ternary operator: if en une ligne
    const headers = token 
      ? { 'Authorization': `Bearer ${token}`, ...options.headers }
      : options.headers;
    // console.log('get OPTIONS', { ...options, headers });
    return this.http.get(url, { ...options, headers });
  }
  
  post(url: string, data: any, options: HttpRequestOptions = {}) {
    const token = this.login.getToken();
    // condition ? TRUE : FALSE 
    // ternary operator: if en une ligne
    const headers = token 
      ? { 'Authorization': `Bearer ${token}`, ...options.headers }
      : options.headers;
    return this.http.post(url, data, { ...options, headers });
  }
}