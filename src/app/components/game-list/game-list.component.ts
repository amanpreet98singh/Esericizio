import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GameItem } from 'src/app/models/game-item';
import { GameListServiceService } from 'src/app/services/game-list-service.service';
import { GeneriService } from 'src/app/services/generi.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {
  fontStyle:string="bold";
  select: boolean;
  messaggio: string;
  @Output()
  showDetail: EventEmitter<number>= new EventEmitter();

  //genereId:string='fps';
  genereId:number=0;

  gameList:GameItem[]=[];
  gameFilter: GameItem[]=[];
  generi: { id: number, genere: string }[];
  
  constructor(private GameListService: GameListServiceService, private listGenere: GeneriService) {
    this.gameList=GameListService.getGameList();
    this.select=false;
    this.generi=listGenere.getList();
   }

  ngOnInit(): void {
  }

  dettaglio(id: number){
    this.showDetail.emit(id);
  }

  showEdit(){
    if(sessionStorage.getItem('login')==="admin")
      return true;
    return false;
  }

  ricerca(id:number){
    //this.genereId=this.listGenere.associaDescrizione(id);
    this.genereId=id;
    this.gameFilter=[];
    this.select=true;
    let cont=0;
    if(id==0){
      this.gameFilter=this.gameList;
      return;
    }
    for(let item of this.gameList)
      if(item.genere==id){
        this.gameFilter.push(item);
        this.messaggio=null;
        cont++;
      }
    if(cont==0)
      this.messaggio='ricerca vuota';
  }

  reset(){
    this.select=false;
  }

}
