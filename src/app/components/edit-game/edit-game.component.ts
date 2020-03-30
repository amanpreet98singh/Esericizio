import { Component, OnInit } from '@angular/core';
import { GameListServiceService } from 'src/app/services/game-list-service.service';
import { GameItem } from 'src/app/models/game-item';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.scss']
})
export class EditGameComponent implements OnInit {
  id:number;

  game:GameItem;
  gameList:GameItem[]=[];
  sub: any;
  
  constructor(private gameListService: GameListServiceService, private route: ActivatedRoute) {
     this.gameList=gameListService.getGameList();
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
   });
   this.game=this.gameListService.getGameItem(this.id);
  }

  edit(nome:string,desc:string,genere:string,prezzo:number, rating:number){
    if(nome!="")
      this.game.name=nome;
    if(desc!="")
      this.game.desc=desc;
    if(genere!="")
      this.game.genere=genere;
    if(prezzo!=0)
      this.game.prezzo=prezzo;
    if(rating!=0)
      this.game.rating=rating;
    this.gameList[this.id-1]=this.game;
    this.gameListService.setGameList(this.gameList);
  }

}
