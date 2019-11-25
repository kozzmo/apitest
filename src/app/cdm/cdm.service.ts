import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})

export class CdmService {

  constructor(private http: HttpClient) { }

  getCdm() {
    return this.http
     .get('http://localhost:3000/cdm')
     .pipe(
       map(response => {
         console.log('get cdm: ' + { response });
         return response;
       }),
     );
  }

  getCdmRanking() {
    return this.http
     .get('http://localhost:3000/cdm/ranking')
     .pipe(
       map(response => {
         console.log('get cdm ranking: ' + { response });
         return response;
       }),
     );
  }

}