import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private UtList: LoginService) { }

  ngOnInit(): void {
  }

  control(ut:String, psw:String){
    if(this.UtList.login(ut,psw)){
    console.log("ok");
    window.alert("login effettuato")}
    else
    window.alert("login errato");
  }

}
