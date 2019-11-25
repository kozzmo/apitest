// nothing used here anymore, just keeping it as a memo for now!
/*

import { Component, OnInit } from '@angular/core';
import { AdminService } from './admin.service';
import { FormControl, FormGroup } from '@angular/forms';
import { AppAdminComponent } from './admin.component';



@Component({
    providers: [AppAdminComponent],
    selector: 'app-addcompetition',
    template: ` <form [formGroup]="newCompetForm" (ngSubmit)="onSubmit()">
                  <select formControlName="typeComp">
                    <option *ngFor="let typeComp of typeCompetitions; let i = index">{{typeComp}}</option>
                  </select>
                  <input #newAnnee formControlName="annee" placeholder="Année">
                  <input #newHote formControlName="hote" placeholder="Hôte">
                  <input formControlName="apirank" type="checkbox" value="" id="defaultCheck1">
                  <button class="btn btn-secondary" type="submit">Créer un compétition</button>
                </form>
              `,
  })
  
  export class blablabla implements OnInit {
   
    // set les types de compet (pas stock en DB)
    typeCompetitions = ['Competition','Apicoles','Coupe du Monde','Euro','Autre']; 
    getcompetitions: any = [];
  
    constructor(private admin: AdminService, private comp: AppAdminComponent) {}
  
    ngOnInit() { 
   
    }
  
    onSubmit() { 
      // console.log('submit: ', this.newCompetForm.value.typeComp, this.newCompetForm.value.annee, this.newCompetForm.value.hote, this.newCompetForm.value.apirank);
      this.admin.postCompetition(this.newCompetForm.value.typeComp, this.newCompetForm.value.annee, this.newCompetForm.value.hote, false).subscribe();
      this.comp.test(); 
    }
  
    newCompetForm = new FormGroup({
      typeComp: new FormControl(''),
      annee: new FormControl(''),
      hote: new FormControl(''),
      apirank: new FormControl(''),
    });
    
  } */ 