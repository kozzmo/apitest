import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PronosComponent, MyPronosToDoComponent } from './pronos/pronos.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ApirankComponent } from './apirank/apirank.component';
import { CompetitionComponent } from './competition/competition.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppareilServiceService } from './services/appareil-service.service';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from '../routerConfig';
import { UsersComponent } from './users/users.component';
import { ChatComponent } from './chat/chat.component';
import { WebsocketService } from './services/websocket';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { SideleftComponent } from './sideleft/sideleft.component';
import { MenuComponent } from './menu/menu.component';
import { SiderightComponent } from './sideright/sideright.component';
import { ProfilComponent } from './profil/profil.component';
import { AdminComponent, AppAdminComponent } from './admin/admin.component';
import { ApirankdtComponent } from './apirankdt/apirankdt.component';
import { CdmComponent } from './cdm/cdm.component';
import { AppMyPronosComponent } from './pronos/pronos.component';
import { ReglementComponent } from './reglement/reglement.component';
import { SelectionComponent } from './selection/selection.component';
import { CookieService } from 'ngx-cookie-service';
import { HttpProxy } from './utils/http.proxy';
//import { Interceptor } from './interceptor';
/* import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material'; */
import { TestComponent } from './test/test.component';



const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    PronosComponent,
    AccueilComponent,
    ApirankComponent,
    CompetitionComponent,
    LoginComponent,
    ChatComponent,
    SideleftComponent,
    MenuComponent,
    SiderightComponent,
    ProfilComponent,
    AdminComponent,
    ApirankdtComponent,
    CdmComponent,
    AppMyPronosComponent,
    ReglementComponent,
    MyPronosToDoComponent,
    AppAdminComponent,
    SelectionComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    SocketIoModule.forRoot(config)
    //MatCheckboxModule,
    // MatExpansionModule,
  ],
  providers: [
    AppareilServiceService,
    WebsocketService,
    CookieService,
    HttpProxy,
    //{provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
