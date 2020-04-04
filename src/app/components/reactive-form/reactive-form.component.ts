import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserProfileService } from 'src/app/services/user-profile.service';
import { DatiPersonali } from 'src/app/models/dati-personali';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  showList:boolean;
  persone: DatiPersonali[];
  ngOnInit(): void {
  }

  loginForm: FormGroup;

  get nomeControl(): FormControl{
    return this.loginForm.get('nome') as FormControl;
  }

  get passwordControl(): FormControl{
    return this.loginForm.get('password') as FormControl;
  }

  constructor(private fb: FormBuilder, private utList: UserProfileService, private router: Router) {
    this.loginForm = this.fb.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      password: ['', Validators.required],
    });
    this.persone=utList.getList();
    this.showList=false;
  }

  cls(){
    this.loginForm.reset(
    );
  }

  control(){
    const ut=this.nomeControl.value;
    const psw=this.passwordControl.value;
    const control = this.utList.control(ut,psw);
    if(control!='nope'){
        const persona: DatiPersonali=this.utList.getUt(ut,psw);
        const index: number =this.utList.getIndexOfUt(ut,psw);
        sessionStorage.setItem('login', control);
        sessionStorage.setItem('utente',ut);
        sessionStorage.setItem('dati',JSON.stringify(persona));
        sessionStorage.setItem('indice', index.toLocaleString());
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

  stampa(){
    if(this.showList===false)
      this.showList=true;
    else
      this.showList=false;
  }

  goToRegistrati(){
    this.router.navigateByUrl('/Registration');
  }

}
