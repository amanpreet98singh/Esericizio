import { Component, OnInit } from '@angular/core';
import { DatiPersonali } from 'src/app/models/dati-personali';
import { UserProfileService } from 'src/app/services/user-profile.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  indice:number;
  persona:DatiPersonali;
  persona2:DatiPersonali;
  persone:DatiPersonali[];
  showList:boolean=false;

  modifyForm: FormGroup;

  get emailControl(): FormControl{
    return this.modifyForm.get('email') as FormControl;
  }
  get passwordControl(): FormControl{
    return this.modifyForm.get('password') as FormControl;
  }
  get nomeControl(): FormControl{
    return this.modifyForm.get('nome') as FormControl;
  }
  get cognomeControl(): FormControl{
    return this.modifyForm.get('cognome') as FormControl;
  }
  get dataDiNascitaControl(): FormControl{
    return this.modifyForm.get('dataDiNascita') as FormControl;
  }
  get luogoDiNascitaControl(): FormControl{
    return this.modifyForm.get('luogoDiNascita') as FormControl;
  }
  get sessoControl(): FormControl{
    return this.modifyForm.get('sesso') as FormControl;
  }
  get newsletterControl(): FormControl{
    return this.modifyForm.get('newsletter') as FormControl;
  }


  constructor(private utList: UserProfileService, private fb:FormBuilder) { 
    this.persona=JSON.parse(sessionStorage.getItem('dati'));
    this.indice=Number.parseInt(sessionStorage.getItem('indice'));
    this.persone=utList.getList();

    this.modifyForm = this.fb.group({
      email: [{value: this.persona.email, disabled: true }],
      password: [{value: this.persona.password, disabled: true }],
      nome: [this.persona.nome,],
      cognome: [this.persona.cognome, ],
      dataDiNascita: [this.persona.dataNascita,],
      luogoDiNascita: [this.persona.luogoNascita, ],
      sesso:[this.persona.sesso,],
      newsletter: [this.persona.newsletter,],
    });
  }

  ngOnInit(): void {
  }

  cls():void{
    this.modifyForm.reset({
      email: [this.persona.email],
      password: [this.persona.password,],
      nome: [this.persona.nome,],
      cognome: [this.persona.cognome, ],
      dataDiNascita: [new Date(this.persona.dataNascita).toISOString().substring(0, 10)],
      luogoDiNascita: [this.persona.luogoNascita, ],
      sesso:[this.persona.sesso,],
      newsletter: [this.persona.newsletter,],
    });
  }

  modify():boolean{
    let modify:boolean=false;
    const nome=this.nomeControl.value;
    const cognome=this.cognomeControl.value;
    const dataDiNascita=this.dataDiNascitaControl.value;
    const luogoDiNascita=this.luogoDiNascitaControl.value;
    const sesso=this.sessoControl.value;
    const newsletter=this.newsletterControl.value;

    if(nome!=this.persona.nome){
      this.persona.nome=nome;
      modify=true;
    }
    if(cognome!=this.persona.cognome){
      this.persona.cognome=cognome;
      modify=true;
    }
    if(dataDiNascita!=this.persona.dataNascita){
      this.persona.dataNascita=dataDiNascita;
      modify=true;
    }
    if(luogoDiNascita!=this.persona.luogoNascita){
      this.persona.luogoNascita=luogoDiNascita;
      modify=true;
    }
    if(sesso!=this.persona.sesso){
      this.persona.sesso=sesso;
      modify=true;
    }
      if(newsletter!=this.persona.newsletter){
      this.persona.newsletter=newsletter;
      modify=true;
    }

    if(modify=true){
      this.utList.editUt(this.persona,this.indice);
    }
    return modify;

  }

  stampa(){
    if(this.showList==false)
      this.showList=true;
    else
      this.showList=false;
  }

}
