import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameDetailComponent } from './components/game-detail/game-detail.component';
import { EditGameComponent } from './components/edit-game/edit-game.component';

const appRoutes: Routes = [   
  { path: 'Home', component: HomeComponent},
  { path: 'GameList', component: GameListComponent},
  { path: 'GameDetail/:id', component: GameDetailComponent},
  { path: 'GameEdit', component: EditGameComponent },
  { path: 'Login', component: LoginComponent},
  { path: '', redirectTo: '/home', pathMatch:'full' }];

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
