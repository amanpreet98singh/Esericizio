import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  constructor(private utList: LoginService, private router: Router) { }

  ngOnInit(): void {
  }
  control(ut:string, psw:string){
    if(this.utList.control(ut,psw)){
      sessionStorage.setItem('login', ut);
      console.log("ok");
      alert("login effettuato");
      this.router.navigateByUrl('/Home');
  }
    else{
      sessionStorage.removeItem('login');
      alert("login errato");
      this.router.navigateByUrl('/Login');
    }
  }

  logout(){
    sessionStorage.removeItem('login');
  }

}
