import { Component, OnInit, Input } from '@angular/core';
import { GameItem } from 'src/app/models/game-item';
import { GameListServiceService } from 'src/app/services/game-list-service.service';
import { ActivatedRoute } from '@angular/router';
import { GeneriService } from 'src/app/services/generi.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {
  id:number;

  game:GameItem;
  sub: any;
  genereList: GeneriService;
  genereGioco:string;

  constructor(private gameListService: GameListServiceService,private route: ActivatedRoute, private genere: GeneriService){
  }
  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
   });
    this.game=this.gameListService.getGameItem(this.id);
    this.genereGioco=this.genere.associaDescrizione(this.game.genere);
  }

}
