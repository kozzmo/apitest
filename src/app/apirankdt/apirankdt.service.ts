import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})

export class ApirankdtService {

  constructor(private http: HttpClient) { }

  getApirankdt() {
    return this.http
     .get('http://localhost:3000/apirankdt')
     .pipe(
       map(response => {
         console.log('get apirankdt: ' + { response });
         return response;
       }),
     );
 }

}