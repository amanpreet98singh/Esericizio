import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserProfileService } from 'src/app/services/user-profile.service';
import { DatiPersonali } from 'src/app/models/dati-personali';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.scss']
})
export class RegistrazioneComponent implements OnInit {
  ngOnInit(): void {
  }
  registrationForm: FormGroup;

  get emailControl(): FormControl{
    return this.registrationForm.get('email') as FormControl;
  }
  get passwordControl(): FormControl{
    return this.registrationForm.get('password') as FormControl;
  }
  get nomeControl(): FormControl{
    return this.registrationForm.get('nome') as FormControl;
  }
  get cognomeControl(): FormControl{
    return this.registrationForm.get('cognome') as FormControl;
  }
  get dataDiNascitaControl(): FormControl{
    return this.registrationForm.get('dataDiNascita') as FormControl;
  }
  get luogoDiNascitaControl(): FormControl{
    return this.registrationForm.get('luogoDiNascita') as FormControl;
  }
  get sessoControl(): FormControl{
    return this.registrationForm.get('sesso') as FormControl;
  }
  get newsletterControl(): FormControl{
    return this.registrationForm.get('newsletter') as FormControl;
  }

  constructor(private fb: FormBuilder, private utList: UserProfileService, private router: Router) {
    this.registrationForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      nome: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      cognome: ['', Validators.required],
      dataDiNascita: ['', Validators.required],
      luogoDiNascita: ['', Validators.required],
      sesso:['', Validators.required],
      newsletter: ['',],
    });
  }

  cls(){
    this.registrationForm.reset();
  }

  registration(){
    let persona : DatiPersonali={email: this.emailControl.value,
                                password: this.passwordControl.value,
                                nome: this.nomeControl.value,
                                cognome: this.cognomeControl.value,
                                dataNascita: this.dataDiNascitaControl.value,
                                luogoNascita: this.luogoDiNascitaControl.value,
                                sesso: this.sessoControl.value,
                                newsletter: this.newsletterControl.value,
                                admin: false};
    if(this.utList.checkUt(persona.password, persona.email)){
      this.cls();
    }
    else{
      this.utList.registrazione(persona);
      this.router.navigateByUrl('/Login');
    }
  }

}
