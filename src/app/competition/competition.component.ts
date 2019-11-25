import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompetitionService } from './competition.Service';
import { FormGroup, FormControl } from '@angular/forms';
import { TestBed } from '@angular/core/testing';
//import { addPlayer } from '@angular/core/src/render3/players';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.scss']
})
export class CompetitionComponent {

  annee: any;
  competition: any;
  acronyme: any;
  private sub: any;
  nomPlayer: any;
  posPlayer: any;



  showEquipe = true;
  showMatch = false;
  showQuestion = false;
  showNew = false;
  showSelection = false;
  
  // C = COACH, bien sur qu'on add les sélectionneurs aussi, nous pas APIBET????
  getPositions = ['Position','GK','DEF','MIL','AT','C'];
  getEquipes: any = [];
  getSelection: any = [];
  getExistingPlayers: any = [];
  selectionEmpty: any = [{}];
  getNbJoueurs:any = [];
  test: any = [];

  newPlayerForm = new FormGroup({
    position: new FormControl(''),
    existingPlayer: new FormControl(''),
    newPlayer: new FormControl(''),
  });

  constructor(private route: ActivatedRoute, private competitionservice: CompetitionService) { }

  

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      // this.annee = (+)params['annee']; // (+) converts string 'annee' to a number
      this.annee = params['annee'];
      this.competition = params['competition'];
      this.acronyme = params['Acronyme'];
    });

    this.competitionservice.getEquipes(this.annee).subscribe((getEquipes: any[]) => {
      this.getEquipes = getEquipes;
      
      for(let i = 0; i <= this.getEquipes.length; i++) {
        this.competitionservice.getNbJoueurs(this.getEquipes[i].Acronyme, this.annee).subscribe((getNbJoueurs: any[]) => {
          this.getNbJoueurs.push(getNbJoueurs);
          console.log('------------------------->this.getNbJoueurs: ',i, this.getNbJoueurs, ' --------->this.getEquipes[i].Acronyme: ', this.getEquipes[i].Acronyme);
          console.log('-------------------------> getNbJoueurs: ',i, getNbJoueurs);
        });
        console.log('----> getNbJoueur: ', i, ' ', this.getEquipes.length);
      }
      
    });

    console.log('################## this.getEquipes.length: ', this.getEquipes.length);
  }


  delPlayer(nom, team, pos) {
    if (confirm("Are you sure to delete " + nom + " " + team + " " + pos + " " + this.annee + "?")) {
      this.competitionservice.delPlayer(nom, team, pos, this.annee).subscribe(); 
      // on réaffiche

    } else {

    }
    
  }



  addPlayer(acrEquipe) {

    //console.log('add rien du tout ---> pos: ', this.newPlayerForm.value.position, ' Existingname: ', this.newPlayerForm.value.existingPlayer, ' newName: ', this.newPlayerForm.value.newPlayer, ' acrEquipe: ', this.annee, acrEquipe);
    
    // Ajout d'un joueur déjà encodé dans la DB -- all the checks
    if ((this.newPlayerForm.value.position != 'Position' && this.newPlayerForm.value.position != '' && this.newPlayerForm.value.position != null) && 
        (this.newPlayerForm.value.existingPlayer != 'Joueur' && this.newPlayerForm.value.existingPlayer != '' && this.newPlayerForm.value.existingPlayer != null) 
        && (this.newPlayerForm.value.newPlayer == '' || this.newPlayerForm.value.newPlayer == null)) {
      this.nomPlayer = this.newPlayerForm.value.existingPlayer;
      this.posPlayer = this.newPlayerForm.value.position;
      // console.log('this.nomPlayer1: ', this.nomPlayer, 'position: ', this.posPlayer, 'newplayer: ', this.newPlayerForm.value.newPlayer)
      // console.log('add Existing player -> nom: ', this.nomPlayer ,' acr: ', acrEquipe ,' pos: ', this.posPlayer ,' annee: ' , this.annee);
      this.competitionservice.addPlayer(this.nomPlayer, acrEquipe, this.newPlayerForm.value.position, this.annee).subscribe();
    }
    
    // Ajout d'un nouveau joueur (input) dans la DB -- all the checks
    if ((this.newPlayerForm.value.position != 'Position' && this.newPlayerForm.value.position != '') && 
        (this.newPlayerForm.value.existingPlayer == 'Joueur' || this.newPlayerForm.value.existingPlayer == '' || this.newPlayerForm.value.existingPlayer == null)
         && (this.newPlayerForm.value.newPlayer != '' && this.newPlayerForm.value.newPlayer != null)) {
      this.nomPlayer = this.newPlayerForm.value.newPlayer;
      // console.log('this.nomPlayer2: ', this.nomPlayer)
      // console.log('add NEW player -> nom: ', this.nomPlayer ,' acr: ', acrEquipe ,' pos: ', this.posPlayer ,' annee: ' , this.annee);
      this.competitionservice.addPlayer(this.nomPlayer, acrEquipe, this.newPlayerForm.value.position, this.annee).subscribe();
    } 

    /* 
    // Une fois le joueur ajouté on resub à tout:
    this.newPlayerForm.reset();

    // subscribe à la selection
    this.competitionservice.getSelection(this.annee, acrEquipe).subscribe((getSelection: any[]) => {

      this.getSelection = getSelection;

      // console.log('getSelection :', getSelection, getSelection.length)

      if (this.getSelection.length == 0) {        
        this.selectionEmpty =  [{nom: acrEquipe}];
        // console.log('tf:', this.selectionEmpty)
      } else {
        this.selectionEmpty = [{}]; 
        // console.log('tu es dans le else -.-')
      }
    });

   
    
    // subscribe à la liste des joueurs existants (pour ajouter)
    this.competitionservice.getExistingPlayers(acrEquipe).subscribe((getExistingPlayers: any []) => {
      this.getExistingPlayers = getExistingPlayers;
    });
    */
    this.competitionservice.getNbJoueurs(acrEquipe, this.annee).subscribe((getNbJoueurs: any[]) => {
      this.test = getNbJoueurs;
    });   

    console.log('new log -------->', this.test);
    
 
  }
 
  showSelections(team: string, index: string) {
    this.showSelection = !this.showSelection;
    // console.log('showSelections team: ', team, index, this.getEquipes[index].Acronyme);


    this.newPlayerForm.reset();

    // subscribe à la selection
    this.competitionservice.getSelection(this.annee, team).subscribe((getSelection: any[]) => {

      this.getSelection = getSelection;

      // console.log('getSelection :', getSelection, getSelection.length)

      if (this.getSelection.length == 0) {        
        this.selectionEmpty =  [{nom: team}];
        // console.log('tf:', this.selectionEmpty)
      } else {
        this.selectionEmpty = [{}]; 
        // console.log('tu es dans le else -.-')
      }
    });
    // subscribe à la liste des joueurs existants (pour ajouter)
    this.competitionservice.getExistingPlayers(team).subscribe((getExistingPlayers: any []) => {
      this.getExistingPlayers = getExistingPlayers;
    }); 
  }

  showEquipes() {
    // show & hide
    this.showEquipe = !this.showEquipe;
    this.showMatch = false;
    this.showQuestion = false;
    this.showNew = false;
  }

  showMatchs() {
    this.showEquipe = false;
    this.showMatch = !this.showMatch;
    this.showQuestion = false;
    this.showNew = false;
  }

  showQuestions() {
    this.showEquipe = false;
    this.showMatch = false;
    this.showQuestion = !this.showQuestion;
    this.showNew = false;
  }

  showNews() {
    this.showEquipe = false;
    this.showMatch = false;
    this.showQuestion = false;
    this.showNew = !this.showNew;
  }

}
