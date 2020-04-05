import { Injectable } from '@angular/core';
import { DatiPersonali } from '../models/dati-personali';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  utRegistrati: DatiPersonali[]=[
    {email: 'aman', password: '123',nome: 'amanpreet',cognome: 'aman', dataNascita: new Date ('14/08/1998'), luogoNascita: "", sesso: "maschio", newsletter: true, admin: false,},
    {email: 'mario', password: '123',nome: 'mario',cognome: 'rossi', dataNascita: new Date('2010/10/10'), luogoNascita: "firenze", sesso: "donna", newsletter: false, admin: true,},
  ];

  getList(){
    return this.utRegistrati;
  }
  
  checkUt(password:string, email:string):boolean{
    const user = this.utRegistrati.find(item =>{
      return item.password===password && item.email===email;
    });
    if(user)
      return true;
    else
      return false;
  }

  getUt(email:string, password:string): DatiPersonali{
    const user = this.utRegistrati.find(item =>{
      return item.password===password && item.email===email;
    });
    if(user)
      return user;
    else
      return null;
  }

  getIndexOfUt(email:string, password:string):number{
    const p=this.getUt(email,password);
    return this.utRegistrati.indexOf(p);
  }

  editUt(ut: DatiPersonali, indice:number): boolean{
    //(method) Array<DatiPersonali>.indexOf(searchElement: DatiPersonali, fromIndex?: number): number
    if(indice!=-1 && indice<this.utRegistrati.length){
      this.utRegistrati[indice]=ut;
      return true;
    }
    else{
      return false;
    }  
  }

  registrazione(ut: DatiPersonali):void{
      this.utRegistrati.push(ut); 
  }

  control(email:string, password:string):string{
    let user=this.getUt(email, password);
    if(user){
      return user.admin ? "admin" : "normal" 
    }
    else{
      return "nope";
    }
  }

  constructor() { }
}
