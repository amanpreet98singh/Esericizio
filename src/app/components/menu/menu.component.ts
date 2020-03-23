import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'src/app/model/menu-item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Output()
  selectMenuItem: EventEmitter<number> = new EventEmitter<number>();
  
  selectedComponenet(id: number){
    for(let menuItem of this.menuList){
        menuItem.sele = id === menuItem.id
    }
  
  this.selectMenuItem.emit(id);

  }
  constructor() { }

  ngOnInit(): void {
  }
  menuList:MenuItem[]=[  
  { id:1, 
    desc:"home",
    sele: true},     
     { id:2, desc:"games-list", 
     sele: false},     
     { id:3, desc:"edit", 
     sele: false}   ]
}

