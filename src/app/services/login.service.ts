import { Injectable, Output } from '@angular/core';
import { Persona } from '../models/persona';
import { EventEmitter } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private peopleList:Persona[]=[
    {id:1, nomeUtente:"mario", password:"123", eta:78, indirizzo:"milano", admin:true},
    {id:2, nomeUtente:"gio", password:"123", eta:30, indirizzo:"roma", admin:false},
    {id:3, nomeUtente:"matteo", password:"123", eta:45, indirizzo:"torino", admin: false},
    {id:4, nomeUtente:"luca", password:"123", eta:34, indirizzo:"almè", admin: false},
    {id:5, nomeUtente:"maria", password:"123", eta:21, indirizzo:"palosco",admin: true},
  ]

  //non serve
  /*getListPeople(): Persona[]{
    return this.peopleList;
  }*/

  control(ut:string, psw:string):string{
    const user = this.peopleList.find(item =>{
      return item.nomeUtente===ut && item.password===psw;
    });
    if(user){
      return user.admin ? "admin" : "normal" 
    } else
      return "nope";
  }

  /*isAdmin(ut:String, psw:String){
    for(let i=0;i<this.peopleList.length;i++)
      if(this.peopleList[i].nomeUtente===ut && this.peopleList[i].password===psw && this.peopleList[i].admin===true)
        return true;
      else
        return false;
  }*/

  constructor() { }
}
