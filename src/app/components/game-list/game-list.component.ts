import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GameItem } from 'src/app/models/game-item';
import { GameListServiceService } from 'src/app/services/game-list-service.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  @Output()
  showDetail: EventEmitter<number>= new EventEmitter();

  gameList:GameItem[]=[];
  
  constructor(private GameListService: GameListServiceService) {
    this.gameList=GameListService.getGameList();
   }

  ngOnInit(): void {
  }

  dettaglio(id: number){
    this.showDetail.emit(id);
  }

}
