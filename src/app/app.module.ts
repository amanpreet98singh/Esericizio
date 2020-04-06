import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameDetailComponent } from './components/game-detail/game-detail.component';
import { EditGameComponent } from './components/edit-game/edit-game.component';
import { AuthGuardService } from './services/auth-guard.service';
import { LoginGuardGuard } from './services/login-guard.guard';
import { EditGuardGuard } from './services/edit-guard.guard';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { RegistrazioneComponent } from './components/registrazione/registrazione.component';
import { GameDirective } from './directive/game.directive';
import { GenereDirective } from './directive/genere.directive';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { NormalGuard } from './services/normal.guard';
import { RatingComponent } from './components/rating/rating.component';

const appRoutes: Routes = [
  { path: 'Login', component: ReactiveFormComponent, canActivate: [LoginGuardGuard]},
  { path: 'Registration', component: RegistrazioneComponent, canActivate: [LoginGuardGuard] },
  { path: 'Home', component: HomeComponent, canActivate: [AuthGuardService]},
  { path: 'GameList', component: GameListComponent , canActivate: [AuthGuardService]},
  { path: 'GameDetail/:id', component: GameDetailComponent , canActivate: [AuthGuardService]},
  { path: 'GameEdit', component: EditGameComponent, canActivate: [AuthGuardService, EditGuardGuard]},
  { path: 'GameEdit/:id', component: EditGameComponent, canActivate: [AuthGuardService, EditGuardGuard], },
  { path: 'UserEdit', component: EditUserComponent, canActivate: [AuthGuardService, NormalGuard]}, 
  { path: '', redirectTo: '/Login', pathMatch:'full' }];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    GameListComponent,
    GameDetailComponent,
    EditGameComponent,
    ReactiveFormComponent,
    RegistrazioneComponent,
    GameDirective,
    GenereDirective,
    EditUserComponent,
    RatingComponent,
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
