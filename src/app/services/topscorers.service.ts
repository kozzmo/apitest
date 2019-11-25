import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TopscorersService {

  constructor(private http: HttpClient) { }

  getTopscorers() {
    return this.http
     .get('http://localhost:3000/topscorers')
     .pipe(
       map(response => {
         return response;
       }),
     );
 }
 
}
