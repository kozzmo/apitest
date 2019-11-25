import { Routes } from '@angular/router';
import { PronosComponent } from './app/pronos/pronos.component';
import { AccueilComponent } from './app/accueil/accueil.component';
import { ChatComponent } from './app/chat/chat.component';
import { CompetitionComponent } from './app/competition/competition.component';
import { LoginComponent } from './app/login/login.component';
import { ApirankComponent } from './app/apirank/apirank.component';
import { ProfilComponent } from './app/profil/profil.component';
import { AdminComponent } from './app/admin/admin.component';
import { ApirankdtComponent } from './app/apirankdt/apirankdt.component';
import { CdmComponent } from './app/cdm/cdm.component';
import { ReglementComponent } from './app/reglement/reglement.component';
import { SelectionComponent } from './app/selection/selection.component';

export const appRoutes: Routes = [
    { path: 'accueil', 
      component: AccueilComponent 
    },
    { path: 'reglement', 
    component: ReglementComponent 
    },
    {
      path: 'pronos',
      component: PronosComponent
    },
    {
      path: 'competition/:annee/:competition',
      component: CompetitionComponent
    },
    {
      path: 'selection/:annee/:nom',
      component: SelectionComponent
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'chat',
      component: ChatComponent
    },
    {
      path: 'apirank',
      component: ApirankComponent
    },
    {
      path: 'profil',
      component: ProfilComponent
    },
    {
      path: 'admin',
      component: AdminComponent
    },
    {
      path: 'apirankdt',
      component: ApirankdtComponent
    },
    {
      path: 'cdm',
      component: CdmComponent
    },
    {
      path: 'login',
      component: LoginComponent
    },
    // BELOW = TEST
    {
      path: 'competition/:id',
      component: AdminComponent
    }
  ];   