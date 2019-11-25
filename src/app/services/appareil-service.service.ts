import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/interval';

@Injectable({
  providedIn: 'root'
})
export class AppareilServiceService {
  constructor(private http: HttpClient) {}

  getMatches() {
     return this.http
      .get('http://localhost:3000/matchs')
      .pipe(
        map(response => {
          console.log('get matches: ' + { response });
          return response;
        }),
      );
  }

  getTeams() {
    return this.http.get('http://localhost:3000/teams')
    .pipe(
        map(response => {
          console.log('get teams : ' + { response });
          return response;
        }),
    );
  }

  getChat() {
    return this.http.get('http://localhost:3000/teams')
  }

  postChat(user: string) {
    return this.http.post('http://localhost:3000/chat/j0hnb00k', user)
    .pipe(response => {
      console.log('postChat()');
      return response;
    });
  }

}

/*
Access to XMLHttpRequest at 'localhost:3000/matchs' from origin 'http://localhost:4200'
has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https.

-> npm install cors
*/