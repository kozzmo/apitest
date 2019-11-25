import { Component, OnInit } from '@angular/core';
import { PronosService } from './pronos.service';
import { LoginService } from '../login/login.service';
import { user } from '../models/User.models';

@Component({
  selector: 'app-pronos',
  templateUrl: './pronos.component.html',
  styleUrls: ['./pronos.component.scss'],
})

export class PronosComponent implements OnInit {

  pronosArray: any = [];
  pronosDoneArray: any = [];
  userArray: any = [];
  userInfo: any = [];
  userToken: string;
  user: string;


  constructor(
    private pronos: PronosService, private login: LoginService) { }


  ngOnInit() {

    this.userInfo = this.login.getUserInfo();
    this.user = this.userInfo.user;

    this.pronos.getPronos(this.user).subscribe((pronosSubscribe: any[]) => {
      this.pronosArray = pronosSubscribe;
    });

  }

}

/* @Component({
  selector: 'app-mypronos',
  template: `
  <div *ngFor="let pronos of pronosArray; let i = index">
    <button type="button" class="btn btn-danger" (click)="validateBet(pronos.id, '1')">{{ pronos.acr1 }}</button>
    <button type="button" class="btn btn-success" (click)="validateBet(pronos.id, '0')">X</button>
    <button type="button" class="btn btn-warning" (click)="validateBet(pronos.id, '2')">{{ pronos.acr2 }}</button>
  </div>`  
}) */

@Component({
  selector: 'app-mypronos',
  template: `
  <table class="table table-striped text-black">
    <thead>
      <tr>
        <th scope="col" colspan="7">Pronos</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let pronosDone of pronosDoneArray; let i = index" 
      [ngClass]="{'bg-success' : pronosDone.prono == '1' && pronosDone.E1but > pronosDone.E2but 
                              || pronosDone.prono == '2' && pronosDone.E2but > pronosDone.E1but 
                              || pronosDone.prono == '0' && pronosDone.E1but == pronosDone.E2but, 
                  'bg-danger' : pronosDone.prono == '1' && pronosDone.E2but > pronosDone.E1but
                                || pronosDone.prono == '2' && pronosDone.E1but > pronosDone.E2but,
                  'bg-warning': pronosDone.prono == '0' && pronosDone.E1but != pronosDone.E2but
                                || pronosDone.prono == '1' && pronosDone.E1but == pronosDone.E2but
                                || pronosDone.prono == '2' && pronosDone.E1but == pronosDone.E2but
                  }">
          <td> <img *ngIf="pronosDone.TOPMATCH === 1" src="../../assets/images/star-yellow.png"> {{ pronosDone.datematch }}</td>
          <td>{{ pronosDone.E1nom }}</td>
          <td><img src="../../assets/images/TEAMS/{{ pronosDone.E1nom }}.png"></td>
          <td>{{ pronosDone.E1but }}</td>
          <td> - </td>
          <td>{{ pronosDone.E2but }}</td>
          <td>{{ pronosDone.progressbar }}</td>
          <td><img src="../../assets/images/TEAMS/{{ pronosDone.E2nom }}.png"></td>
          <td>{{ pronosDone.E2nom }}</td>
          <td>{{ pronosDone.total }}</td>
      </tr>
    </tbody>
  </table>
  `
})

export class AppMyPronosComponent implements OnInit {

  pronosDoneArray: any = [];
  test: string;
  userInfo: any = [];
  userToken: string;
  user: string;

  constructor(private pronos: PronosService, private login: LoginService) { }
  
  ngOnInit() {

    this.userInfo = this.login.getUserInfo();
    this.user = this.userInfo.user;

    this.pronos.getPronosDone(this.user).subscribe((pronosDoneSubscribe: any[]) => {
      console.log('getPronoDone :', this.user)
      this.pronosDoneArray = pronosDoneSubscribe;
    });
  } 

} 


@Component({
  selector: 'app-mypronosTodo',
  template: `
  <div *ngFor="let pronos of pronosArray; let i = index">
    <button type="button" [ngClass]="pronos.prono == '1' ? 'btn btn-warning' : 'btn btn-danger'" (click)="validateBet(pronos.id, '1')">{{ pronos.acr1 }}</button>
    <button type="button" [ngClass]="pronos.prono == '0' ? 'btn btn-warning' : 'btn btn-danger'" (click)="validateBet(pronos.id, '0')">X</button>
    <button type="button" [ngClass]="pronos.prono == '2' ? 'btn btn-warning' : 'btn btn-danger'" (click)="validateBet(pronos.id, '2')">{{ pronos.acr2 }}</button>
  </div>`  
})

export class MyPronosToDoComponent implements OnInit {

  pronosArray: any = [];
  test: string;
  userInfo: any = [];
  userToken: string;
  user: string;

  constructor(private pronos: PronosService, private login: LoginService) { }

  ngOnInit() {
    this.userInfo = this.login.getUserInfo();
    this.user = this.userInfo.user;

    this.pronos.getPronos(this.user).subscribe((pronosSubscribe: any[]) => {
      this.pronosArray = pronosSubscribe;
    });

  }

    
  validateBet(matchId, userProno) {

    // T0D0: rajouter un check sur le timestamp pour empecher qu'on puisse valider un prono dont le match aurait déjà commencé (ex: le user refresh rien pdt la dernière heure où on peut prono)
    // -> si vrai, valide prono si faux, on resubscribe à getPronos pour refresh et son prono -> locked
    this.userInfo = this.login.getUserInfo();
    this.user = this.userInfo.user;
    
    // console.log('Pronos component.validateBet() - this.user: ' + this.user + '  this.matchId ' + matchId + '  this.userProno: ' + userProno)
    this.pronos.validateBet(this.user, matchId, userProno).subscribe();
    this.pronos.getPronos(this.user).subscribe((pronosSubscribe: any[]) => {
      this.pronosArray = pronosSubscribe;
    });

  }

}


