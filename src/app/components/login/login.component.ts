import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  constructor(private UtList: LoginService, private router: Router) { }

  ngOnInit(): void {
  }
  control(ut:string, psw:string){
    if(this.UtList.login(ut,psw)){
    sessionStorage.setItem('login', ut);
    console.log("ok");
    window.alert("login effettuato")
    this.router.navigateByUrl('/Home');
    
  }
    else{
    window.alert("login errato");
    this.router.navigateByUrl('/Login');
    }
  }

  logout(){
    sessionStorage.removeItem('login');
  }

}
