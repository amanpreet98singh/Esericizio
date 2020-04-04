import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appGame]'
})
export class GameDirective {

  @Input('appGame') fontStyle: string;

  constructor(private el: ElementRef) { 
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.fontWeight= this.fontStyle;
    if(sessionStorage.getItem('login')==='admin')
      this.el.nativeElement.style.backgroundColor ='red';
    else
      this.el.nativeElement.style.backgroundColor='null';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = null;
    this.el.nativeElement.style.fontWeight= 'normal';
  }
  

}
