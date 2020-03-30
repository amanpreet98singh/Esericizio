import { Injectable } from '@angular/core';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private peopleList:Persona[]=[
    {id:1, nomeUtente:"mario", password:"123", eta:78, indirizzo:"milano"},
    {id:2, nomeUtente:"gio", password:"123", eta:30, indirizzo:"roma"},
    {id:3, nomeUtente:"matteo", password:"123", eta:45, indirizzo:"torino"},
    {id:4, nomeUtente:"luca", password:"123", eta:34, indirizzo:"almè"},
    {id:5, nomeUtente:"maria", password:"123", eta:21, indirizzo:"palosco"},
  ]

  //non serve
  /*getListPeople(): Persona[]{
    return this.peopleList;
  }*/

  login(ut:String, psw:String):boolean{
    for(let i=0;i<this.peopleList.length;i++)
      if(this.peopleList[i].nomeUtente===ut && this.peopleList[i].password===psw)
        return true;
      return false;
  }

  constructor() { }
}
