import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  utente:string;
  constructor() {
    this.utente=sessionStorage.getItem('utente');
  }

  ngOnInit(): void {
  }

}
