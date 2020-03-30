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
    const control = this.utList.control(ut,psw);
    console.log(control);
    if(control==='admin'){
        sessionStorage.setItem('login', 'admin');
        alert("login effettuato admin");
        this.router.navigateByUrl('/Home');
    }
    else if(control==='normal'){
      sessionStorage.setItem('login', 'normal');
      alert("login effettuato normal");
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
