import { Component, OnInit, Input } from '@angular/core';
import { GameItem } from 'src/app/model/game-item';
import { GameListService } from 'src/app/services/game-list-service.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {
  @Input()
  gameid:number;
  game:GameItem;
  constructor(private gameListService: GameListService) { 
  }

  ngOnInit(): void {
    this.game=this.gameListService.getGameItem(this.gameid);
  }

}
