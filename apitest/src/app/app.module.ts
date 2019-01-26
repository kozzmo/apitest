import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PronosComponent } from './pronos/pronos.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ProfilComponent } from './profil/profil.component';
import { ApirankComponent } from './apirank/apirank.component';
import { CompetitionComponent } from './competition/competition.component';

@NgModule({
  declarations: [
    AppComponent,
    PronosComponent,
    AccueilComponent,
    ProfilComponent,
    ApirankComponent,
    CompetitionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
 

export class AppModule { }
