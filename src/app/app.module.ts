import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { GameListComponent } from './component/game-list/game-list.component';
import { GamesListComponent } from './components/games-list/games-list.component';
import { GameDetailComponent } from './components/game-detail/game-detail.component';
import { MenuComponent } from './components/menu/menu.component';
import { EditGameComponent } from './components/edit-game/edit-game.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameListComponent,
    GamesListComponent,
    GameDetailComponent,
    MenuComponent,
    EditGameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
