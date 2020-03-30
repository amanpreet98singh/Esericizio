import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameDetailComponent } from './components/game-detail/game-detail.component';
import { EditGameComponent } from './components/edit-game/edit-game.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuardService } from './services/auth-guard.service';

const appRoutes: Routes = [
  { path: 'Login', component: LoginComponent},
  { path: 'Home', component: HomeComponent, canActivate: [AuthGuardService], },
  { path: 'GameList', component: GameListComponent , canActivate: [AuthGuardService],},
  { path: 'GameDetail/:id', component: GameDetailComponent , canActivate: [AuthGuardService],},
  { path: 'GameEdit/:id', component: EditGameComponent, canActivate: [AuthGuardService], },
  { path: '', redirectTo: '/Home', pathMatch:'full' }];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    GameListComponent,
    GameDetailComponent,
    EditGameComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
