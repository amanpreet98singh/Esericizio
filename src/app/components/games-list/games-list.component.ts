import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GameItem } from 'src/app/model/game-item';
import { GameListService } from 'src/app/services/game-list-service.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {
  @Output("showDetail")
  showDetailEvent: EventEmitter<number>=new EventEmitter();
  gameList:GameItem[]=[]
  constructor( private gameListService: GameListService) { 
    this.gameList = this.gameListService.getGameList();
  }

  ngOnInit(): void {
  }

  
  showDetail(id:number){
     this.showDetailEvent.emit(id);
  }
}
