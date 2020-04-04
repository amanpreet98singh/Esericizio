import { Component, OnInit } from '@angular/core';
import { GameListServiceService } from 'src/app/services/game-list-service.service';
import { GameItem } from 'src/app/models/game-item';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneriService } from 'src/app/services/generi.service';

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
  generi: { id: number, genere: string }[];
  
  constructor(private gameListService: GameListServiceService, private route: ActivatedRoute, private router:Router, private genere: GeneriService) {
     this.gameList=gameListService.getGameList();
     this.generi=genere.getList();
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
   });
   this.game=this.gameListService.getGameItem(this.id);
  }

  edit(nome:string,desc:string,genere:number,prezzo:number, rating:number){
    if(nome!="")
      this.game.name=nome;
    if(desc!="")
      this.game.desc=desc;
    if(genere!=0)
      this.game.genere=genere;
    if(prezzo!=0)
      this.game.prezzo=prezzo;
    if(rating!=0)
      this.game.rating=rating;
    this.gameList[this.id-1]=this.game;
    this.gameListService.setGameList(this.gameList);
  }

  showEditGame(){
    if(this.id===null)
      return false;
    else
      return true;
  }

  goToId(id:number){
    this.router.navigateByUrl('/GameEdit/'+id);
  }
}
