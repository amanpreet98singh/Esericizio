import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { GamesListComponent } from './components/games-list/games-list.component';
import { GameDetailComponent } from './components/game-detail/game-detail.component';
import { MenuComponent } from './components/menu/menu.component';
import { EditGameComponent } from './components/edit-game/edit-game.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'games-list', component: GamesListComponent },
  { path: 'detail',  component: GameDetailComponent },
  { path: 'edit',  component: EditGameComponent },
  { path: '', redirectTo: '/home', pathMatch:'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GamesListComponent,
    GameDetailComponent,
    MenuComponent,
    EditGameComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
