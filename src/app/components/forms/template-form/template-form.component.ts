import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {
  constructor(private loginServices: LoginService) { }

  // loginList: { name: string, power: string }[] = [];

  model: { name: string, password: string } = {
    name: '',
    password: ''
  };
  ngOnInit(): void {
  }

}
