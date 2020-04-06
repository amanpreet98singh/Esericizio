import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  onChange: any = ()=>{};
  onTouch: any = ()=>{};

  value: number;

  constructor() { }

  writeValue(obj: number): void {
    this.value=obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  selectRate(item: number){
    this.value = item;
    this.onTouch(item);
    this.onChange(item);
  }

  ngOnInit(): void {
  }


}
