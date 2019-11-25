import { LoginService } from '../login/login.service';
import { HttpProxy } from '../utils/http.proxy';
import { headersToString } from 'selenium-webdriver/http';
import { map } from 'rxjs/operators';
import { Observable, of, from } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root'
})

export class CompetitionService {    

    constructor(private httpProxy: HttpProxy, private http: HttpClient) { }

    delPlayer(nom: string, team: string, pos: string, annee: string) {
      const url = 'http://localhost:3000/competition/team/del/player';
      console.log('competition service delPlayer, nom, team, annee, pos: ', nom, team, pos, annee)
      return this.http.post(url, { nom, team, pos, annee })
      .pipe(
        map(response => {
          return response;
        }),
      );
    }


    getNbJoueurs(team: string, annee: string) {

      return this.httpProxy
      .post('http://localhost:3000/competition/teams/selection/nbjoueurs', { team, annee })
      .pipe(
        map(response => {
          // console.log('competition service getNbJoueurs: ', response); 
          return response; 
       }),
     );
    } 

      
    addPlayer(nom: string, team: string, pos: string, annee: string) {
      const url = 'http://localhost:3000/competition/team/player';
      console.log('competition service addPlayer, nom, team, pos, annee: ', nom, team, pos, annee)
      return this.http.post(url, { nom, team, pos, annee })
      .pipe(
        map(response => {
          return response;
        }),
      );
    }


    

    getEquipes(annee: string) {
 
        return this.httpProxy
         .post('http://localhost:3000/competition/teams', { annee })
         .pipe(
           map(response => {
             console.log('competition service get Equipes: ', response, ' get annee = ', annee); 
             return response; 
          }),
        );   
    }

    getSelection(annee: string, team: string) {
 
      return this.httpProxy
       .post('http://localhost:3000/competition/teams/selection', { annee, team })
       .pipe(
         map(response => {
           console.log('competition service get selection: ', response, ' get annee = ', annee, ' get team = ', team); 
           return response; 
        }),
      );   
    } 

    getExistingPlayers(team: string) {

      return this.httpProxy
      .post('http://localhost:3000/competition/teams/players', { team })
      .pipe(
        map(response => {
          console.log('competition service get existingPlayers: ', response); 
          return response; 
       }),
     );

    }

}  