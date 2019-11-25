import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})

export class ApirankService {

  constructor(private http: HttpClient) { }

  getApirank() {
    return this.http
     .get('http://localhost:3000/apirank')
     .pipe(
       map(response => {
         console.log('get apirank: ' + { response });
         return response;
       }),
     );
  }

}