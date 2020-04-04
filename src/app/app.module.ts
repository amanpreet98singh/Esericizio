import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameDetailComponent } from './components/game-detail/game-detail.component';
import { EditGameComponent } from './components/edit-game/edit-game.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { LoginGuardGuard } from './services/login-guard.guard';
import { EditGuardGuard } from './services/edit-guard.guard';
import { TemplateFormComponent } from './components/forms/template-form/template-form.component';

const appRoutes: Routes = [
  { path: 'Login', component: TemplateFormComponent, canActivate: [LoginGuardGuard] },
  { path: 'Home', component: HomeComponent, canActivate: [AuthGuardService,], },
  { path: 'GameList', component: GameListComponent , canActivate: [AuthGuardService,],},
  { path: 'GameDetail/:id', component: GameDetailComponent , canActivate: [AuthGuardService],},
  { path: 'GameEdit', component: EditGameComponent, canActivate: [AuthGuardService, EditGuardGuard], },
  { path: 'GameEdit/:id', component: EditGameComponent, canActivate: [AuthGuardService, EditGuardGuard], },
  { path: '', redirectTo: '/Login', pathMatch:'full' }];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    GameListComponent,
    GameDetailComponent,
    EditGameComponent,
    LoginComponent,
    TemplateFormComponent,
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(appRoutes),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
