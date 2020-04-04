import { Injectable } from '@angular/core';
import { GameItem } from '../models/game-item';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class GameListServiceService {

  private gameListStored:GameItem[]=[     
    { id:1, name:"gta", desc:"gioco azione", genere:1, prezzo:50, rating:5},
    { id:2, name:"fifa", desc:"gioco sport", genere:2, prezzo:32, rating:4},
    { id:3, name:"pes", desc:"gioco sport", genere:1, prezzo:44, rating:1},
    { id:4, name:"forza", desc:"gioco corsa", genere:1, prezzo:99, rating:3},
    { id:5, name:"far cry", desc:"gioco sparatutto", genere:2, prezzo:12, rating:2},
  ];

  getGameList(): GameItem[]{
    return this.gameListStored;
  }

  setGameList(gameList:GameItem[]):void{
    this.gameListStored=gameList;
  }

  getGameItem(id:number):GameItem{
    return this.gameListStored.find(item => {
      return item.id===id;
    }
    );
  }

  constructor() { }

}
