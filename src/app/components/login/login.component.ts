import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private utList: LoginService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  control(ut:string, psw:string){
    const control = this.utList.control(ut,psw);
    if(control!='nope'){
        sessionStorage.setItem('login', control);
        sessionStorage.setItem('utente',ut);
        alert("login effettuato "+control);
        this.router.navigateByUrl('/Home');
    }
  else{
      sessionStorage.removeItem('login');
      sessionStorage.removeItem('utente');
      alert("login errato");
      this.router.navigateByUrl('/Login');
    }
  }

}
