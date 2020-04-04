import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneriService {

  generi: { id: number, genere: string }[] = [
    {id:1, genere:'action'},
    {id:2, genere:'fps'},
  ];
  constructor() { }

  associaDescrizione(id:number): string{
      return this.generi[id-1].genere;
  }

  getList(){
    return this.generi;
  }
}
