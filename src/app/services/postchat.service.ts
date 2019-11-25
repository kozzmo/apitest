import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostchatService {

  constructor(private http: HttpClient) {}


    addChat(user: string, message: string) {

      const url = 'http://localhost:3000/chat';
      console.log('user : ' + user + ' message : ' + message);
      return this.http.post(url, { user, message });

    };


  
}
