import { Component, OnInit, Input } from '@angular/core';
//import { getRenderedText } from '@angular/core/src/render3';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from './login.service';
import { PostchatService } from '../services/postchat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  /*template: `
    <input #box (keyup.enter)="onEnter(box.value)">
    <p>{{value}}</p>
    <input type="text" [formControl]="favoriteColorControl"> 
  ` */
})

export class LoginComponent {

  loginArray: any = [];
  myData: any = [];

  constructor(
    private login: LoginService, 
    private postChat: PostchatService
    ) {}

  profileForm = new FormGroup({
    user: new FormControl(''),
    pwd: new FormControl(''),
  });

  onSubmit() { 
    // call service 
    // this.postChat.addChat(this.profileForm.value.user, this.profileForm.value.pwd).subscribe();
    console.log('trying to login user: ', this.profileForm.value.user, 'pwd :', this.profileForm.value.pwd);
    this.login.isLogged(this.profileForm.value.user, this.profileForm.value.pwd).subscribe();
    /*=> {
      this.loginArray = <UserInfoInterface>;
      console.log('User : ' + this.loginArray.mail);
    }); */

   this.login.isLogged(this.profileForm.value.user, this.profileForm.value.pwd).subscribe(data => {
      if(data) {
        console.log('logged -> Data: ', data);
        this.myData = data;
      } else {
        console.log('not logged'); 
      }
    });

    // console.log('trying to login...');

  } 

  @Input() index: number;

  ngOnInit() {
  }
}
