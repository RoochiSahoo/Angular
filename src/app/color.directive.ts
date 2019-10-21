import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(private ele:ElementRef) { }
  changeColor(color:string,color2:string)
  {
    this.ele.nativeElement.style.backgroundColor=color;
    this.ele.nativeElement.style.color=color2; 
  }
  @HostListener('mouseenter')
  onMouseEnter(){
    this.changeColor('magenta','green');
  }
  @HostListener('mouseleave')
  onMouseLeave(){
    this.changeColor(null,null);
  }

}
