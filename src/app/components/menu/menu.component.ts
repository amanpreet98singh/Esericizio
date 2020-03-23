import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'src/app/models/menu-item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Output()
  selectedMenuItem: EventEmitter<number>= new EventEmitter();

  menuList:MenuItem[]=[     
    { id:1, desc:"Home", sele: true},
    { id:2, desc:"GameList", sele: false},
    { id:3, desc:"GameEdit", sele: false}  
   ]


  constructor() { }

  ngOnInit(): void {
  }

  change(id:number){
    for(let MenuItem of this.menuList)
      MenuItem.sele=id === MenuItem.id;
    this.selectedMenuItem.emit(id);
  }

}
