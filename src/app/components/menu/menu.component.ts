import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'src/app/models/menu-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  testo :string;
  utente:string=null;

  changeMenu(){
    this.removeEditItem();
    this.changeName();
    this.showNomeUt();
  }

  removeEditItem(){
    if (sessionStorage.getItem('login')==="admin"){
      this.menuList[2]={ id:3, desc:"GameEdit", sele: false};
      this.menuList[3]={ id:4, desc:"Login", sele:false};
    }
    else{
      this.menuList[2]={ id:4, desc:"Login", sele:false};
      this.menuList.splice(3);
    }

  }

  changeName(){
    if(sessionStorage.getItem('login')==="admin"){
      this.menuList[3].desc='Logout';
    }
    else if(sessionStorage.getItem('login')==="normal"){
      this.menuList[2].desc='Logout';
    }
    else if(sessionStorage.getItem('login')===null)
      this.menuList[2].desc='Login';
  }

  showNomeUt(){
    if(sessionStorage.getItem('utente')!=null){
      this.utente=sessionStorage.getItem('utente');
      return true;
    }
    else{
      this.utente=null;
      return false;
    }
  }

  menuList:MenuItem[]=[     
    { id:1, desc:"Home", sele: true},
    { id:2, desc:"GameList", sele: false},
    { id:3, desc:"GameEdit", sele: false},
    { id:4, desc:"Login", sele:false},
   ]

  constructor(private router: Router) {
    this.changeMenu();
  }

  ngOnInit(): void {
  }

  change(id:number){
    this.changeMenu();
    if(id===4){
      sessionStorage.removeItem('login');
      sessionStorage.removeItem('utente');
      this.router.navigateByUrl('/Login');
    }
    this.router.events.subscribe(value => {
      this.changeMenu();
    });
  }
}
