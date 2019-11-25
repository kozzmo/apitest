import { Component, OnInit } from '@angular/core';
import { AdminService } from './admin.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


@Component({
  selector: 'app-admincomponent',
  template: `<table class="table table-striped text-white">
              <thead>
                <tr>
                  <th scope="col" colspan="7">Competitions</th>
                </tr>
                <tr><td></td><td>Type</td><td>Année</td><td colspan="2">Hôte</td><td>Apirank</td></tr>
              </thead>
              <tbody>                  
                  <tr *ngFor="let competition of getcompetitions; let i = index"  [routerLink]="['../competition', competition.annee, competition.type]">
                    <td><button class="btn btn-warning" (click)='delCompet(competition.type, competition.annee)'>Delete</button></td>
                    <td>{{ competition.type }}</td>
                    <td>{{ competition.annee }}</td>
                    <td class="text-center"><img src="../../assets/images/TEAMS/{{ competition.Hote }}.png"></td>
                    <td class="text-left">{{ competition.Hote }}</td>
                    <td>{{ competition.apirank }}</td>
                  </tr>                  
              </tbody>
            </table>
            <div>
              <form [formGroup]="newCompetForm" (ngSubmit)="postCompetition()">
                <select formControlName="typeComp">
                  <option *ngFor="let typeComp of typeCompetitions; let i = index">{{ typeComp }}</option>
                </select>
                <input #newAnnee formControlName="annee" placeholder="Année">
                <input #newHote formControlName="hote" placeholder="Hôte">
                <input formControlName="apirank" type="checkbox" value="" id="defaultCheck1">
                <button class="btn btn-secondary" type="submit">Créer un compétition</button>
              </form>
          </div>
  `,
})

export class AppAdminComponent implements OnInit {

  newCompetForm = new FormGroup({
    typeComp: new FormControl(''),
    annee: new FormControl(''),
    hote: new FormControl(''),
    apirank: new FormControl(''),
  });

  // == result req sql
  getcompetitions: any = [];

  // set les types de compet (pas stock en DB)
  typeCompetitions = ['Competition','Apicoles','Coupe du Monde','Euro','Autre'];
  

  constructor(private admin: AdminService) { }

  ngOnInit() {
      this.admin.getCompetitions().subscribe((getCompetitionsSub: any[]) => {
        this.getcompetitions = getCompetitionsSub;
    });
  }
  
  /*
  test() {
    console.log('test() from admin component called');
    this.admin.getCompetitions().subscribe((getCompetitionsSub: any[]) => {
      this.getcompetitions = getCompetitionsSub;
    });
    console.log('wtf : ', this.getcompetitions);
  }
  */

  
  delCompet(competition, annee) {
    // console.log('del compet', competition, annee)
    if (confirm("Are you sure to delete " + competition + " " + annee + "?")) {
      this.admin.delCompetition(competition, annee).subscribe();
      // une fois que c'est delete on réaffiche: 
      this.admin.getCompetitions().subscribe((getCompetitionsSub: any[]) => {
        this.getcompetitions = getCompetitionsSub;
      });
    } else {
      /* this.admin.getCompetitions().subscribe((getCompetitionsSub: any[]) => {
        this.getcompetitions = getCompetitionsSub;
      }); */
    }
  }

  postCompetition() {
    // console.log('submit: ', this.newCompetForm.value.typeComp, this.newCompetForm.value.annee, this.newCompetForm.value.hote, this.newCompetForm.value.apirank);
    this.admin.postCompetition(this.newCompetForm.value.typeComp, this.newCompetForm.value.annee, this.newCompetForm.value.hote, false).subscribe();
    this.admin.getCompetitions().subscribe((getCompetitionsSub: any[]) => {
      this.getcompetitions = getCompetitionsSub;
    });
  }

}


