import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appGenere]'
})
export class GenereDirective {
  @Input('appGenere') id: number;

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.color=null;
    this.el.nativeElement.style.backgroundColor =null;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.fontWeight= 'bold';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.fontWeight= 'normal';
  }

  ngOnInit(): void {
    if(this.id==0){
      this.el.nativeElement.style.color="black";
      this.el.nativeElement.style.backgroundColor ='red';
    }
    else if(this.id==1){
      this.el.nativeElement.style.color="white";
      this.el.nativeElement.style.backgroundColor ='blue';
    }
    else if(this.id==2){
      this.el.nativeElement.style.color="white";
      this.el.nativeElement.style.backgroundColor='#006400';
    }

  }
}

