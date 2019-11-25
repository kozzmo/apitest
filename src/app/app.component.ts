import { Component, OnInit } from '@angular/core';
import { AppareilServiceService } from '../app/services/appareil-service.service';
import { PostchatService } from '../app/services/postchat.service';

import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AppareilServiceService]
})

export class AppComponent implements OnInit {
  
  
  lastUpdate = new Date();

  posts: any = [];
  teams: any = [];
  teamSubscription: Subscription;
  counter: any = [];
  postChatSubscription: Subscription;
  postChat: any = [];
  matchsArray: any = [];

  

  constructor(private postsService: AppareilServiceService, private matchService: AppareilServiceService, private fb: FormBuilder, private addChatService: PostchatService) {}
  
  
  ngOnInit() {
    // EXAMPLE 1
    this.postsService.getMatches()
      .subscribe((matches) => {
        this.posts = matches;
      });

    this.postChatSubscription = this.postsService.getChat()
    .subscribe(user => this.postChat.push(user));

    this.matchService.getMatches().subscribe((matchsSubscribe: any[]) => {
      this.matchsArray = matchsSubscribe;
    });
    

    // EXAMPLE 2
    this.teamSubscription = this.postsService.getTeams().subscribe((teams: any[]) => {
      this.teams = teams;
    },(error) => {
      console.log('Erreur: ' + error)
    },
    );
  }

  ngOnDestroy() {
    // on se désabonne pour éviter les mémory leaks
    this.teamSubscription.unsubscribe(); 

  }


}
