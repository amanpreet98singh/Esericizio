import { Component } from '@angular/core';
import { GameDetailComponent } from './components/game-detail/game-detail.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Esercitazione';
  componentToShow:number=1;
  gameDetail:number;

  showDetail(id:number){
    this.componentToShow=4;
    this.gameDetail=id;
  }
}

