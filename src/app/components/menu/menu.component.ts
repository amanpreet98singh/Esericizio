import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'src/app/models/menu-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Output()
  selectedMenuItem: EventEmitter<number>= new EventEmitter();

  //loginDesc:string='Login';

  changeName(){
    if(sessionStorage.getItem('login')===null)
      this.menuList[2].desc='Login';
    else
      this.menuList[2].desc='Logout';
  }

  menuList:MenuItem[]=[     
    { id:1, desc:"Home", sele: true},
    { id:2, desc:"GameList", sele: false},
    //{ id:3, desc:"GameEdit", sele: false},
    { id:3, desc:"Login", sele:false},
   ]

  constructor(private router: Router) { this.changeName();}

  ngOnInit(): void {
  }

  change(id:number){
    this.changeName();
    for(let MenuItem of this.menuList)
      MenuItem.sele=id === MenuItem.id;
    this.selectedMenuItem.emit(id);
    if(id===3){
      sessionStorage.removeItem('login');
      this.changeName();
      this.router.navigateByUrl('/Login');
    }

  }

}
