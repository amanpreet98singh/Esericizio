import { Injectable } from '@angular/core';
import { GameItem } from '../model/game-item';

@Injectable({
  providedIn: 'root'
})
export class GameListService {

  private gameList:GameItem[]=[  
    { id:1, name:"gta", desc:"azione", genere:"open wordl", prezzo:50, rating:5},
    { id:2, name:"fifa", desc:"calcio", genere:"sport", prezzo:50, rating:4},
    { id:3, name:"pes", desc:"corsa", genere:"open wordl", prezzo:50, rating:5}

  ]
  constructor() { }

  getGameList(): GameItem[]{
    return this.gameList;
  }

  getGameItem(id: number): GameItem {
    return this.gameList.find(item =>{
      return item.id === id;
    });
  }
}
