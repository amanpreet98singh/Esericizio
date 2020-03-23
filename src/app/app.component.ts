import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  componentToShow: number = 1;
  gameIdForDetail:number;
  showDetailPage(id:number){
    this.gameIdForDetail=id;
    this.componentToShow=4;

  }
}
