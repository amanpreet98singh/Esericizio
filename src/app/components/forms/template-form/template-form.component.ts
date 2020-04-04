import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  constructor(private utList: LoginService, private router:Router) { }

  //loginList: { name: string, power: string }[] = [];

  model: { name: string, password: string } = {
    name: '',
    password: ''
  };
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
