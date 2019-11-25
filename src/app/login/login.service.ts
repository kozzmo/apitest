import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

export interface UserInfoInterface {
  user: string;
  token: string;
  userId: number;
  userEmail: string;
};


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user: any = [];
  private isUserLoggedIn;
  public userInfo: UserInfoInterface;

  constructor(private http: HttpClient, private cookieService: CookieService) {
    this.isUserLoggedIn = false;
   }

  getMe() {
    // @todo vérifier JWT
    // const token = this.cookieService.get('jwt');
  }

  isLogged (user: string, pwd: string) {
      const url = 'http://localhost:3000/login';
      console.log('user : ' + user + ' message : ' + pwd);
      return this.http.post<UserInfoInterface>(url, { user, pwd }).pipe(
        map(response => {
          this.userInfo = response;
          this.cookieService.set('jwt', response.token, 7); // 7 = days
          this.isUserLoggedIn = true;
          console.log('LOGIN RESPONSE', response);
          return response;
        }),
      );
  };

  getToken() {
    console.log('GET TOKEN', this.isUserLoggedIn, this.userInfo);
    return this.isUserLoggedIn && this.userInfo && this.userInfo.token;
  }

  getUserInfo() {
    return this.userInfo;
    
  }
  
  getUserLoggedIn() {
    return this.isUserLoggedIn;
  }
  
}
