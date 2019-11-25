import { Injectable } from '@angular/core';
import { HttpProxy } from '../utils/http.proxy';
import { LoginService } from '../login/login.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient,
    private login: LoginService,
    private httpProxy: HttpProxy
    ) { }

    getCompetitions() {
      return this.httpProxy
       .get('http://localhost:3000/competitions', {})
       .pipe(
         map(response => {
           console.log('get competitions: ' + { response });
           return response; 
         }),
       ); 
    }

    postCompetition(typecomp: string, annee: string, hote: string, apirank: boolean) {
      const url = 'http://localhost:3000/competition';
      return this.http.post(url, { typecomp, annee, hote, apirank })
      .pipe(
        map(response => {
          return response;  
        }),
      );
    }

    delCompetition(competition: string, annee: string) {
      const url = 'http://localhost:3000/del/competition';
      return this.http.post(url, { competition, annee })
      .pipe(
        map(response => {
          return response;
        }),
      );
    }
} 
