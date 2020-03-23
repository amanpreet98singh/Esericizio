import { Component, OnInit, Input } from '@angular/core';
import { GameItem } from 'src/app/models/game-item';
import { GameListServiceService } from 'src/app/services/game-list-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {
  id:number;

  game:GameItem;
  sub: any;

  constructor(private gameListService: GameListServiceService,private route: ActivatedRoute){

  }
  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
   });
    this.game=this.gameListService.getGameItem(this.id);
  }

}
