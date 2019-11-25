import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginService } from '../login/login.service';
import { HttpProxy } from '../utils/http.proxy';
import { headersToString } from 'selenium-webdriver/http';



@Injectable({
  providedIn: 'root'
})

export class PronosService {

  userInfo: any = [];
  user: string;

  constructor(private http: HttpClient,
              private login: LoginService,
              private httpProxy: HttpProxy
              ) { }
  
  getUserInfo() {
      this.userInfo = this.login.getUserInfo();
      console.log('PronosService : ' + this.userInfo.user)
  }


  getUserLoggedIn() {
    console.log('this.login.getUserLoggedIn: ' + this.login.getUserLoggedIn());
    return this.login.getUserLoggedIn();
  }

  getPronos(user: string) {
    this.user = user;
    return this.httpProxy
     .get('http://localhost:3000/pronos', { user })
     .pipe(
       map(response => {
         console.log('get pronos: ' + { response });
         return response;
       }),
     );
  }

  getPronosDone(user: string) {
    this.user = user
    // console.log('get prono done user : ', user)
    return this.httpProxy
     .get('http://localhost:3000/pronos/done', { user })
     .pipe(
       map(response => {
         return response;
       }),
     );
  }

  validateBet(user: string, matchId: string, userProno: string) {    
    console.log('PRONOS SERVICE VALIDATEBET() | user : ' + user + ' matchId : ' + matchId + ' userProno : ' + userProno);
    const url = 'http://localhost:3000/pronos';
    return this.http.post(url, { user, matchId, userProno })
    .pipe(
      map(response => {
        return response;
      }),
    );
  }

}