import { Directive, ElementRef, NgModule, OnInit } from '@angular/core';

@Directive({
  selector: '[apphover-fade]'
})
export class HoverFadeDirective implements OnInit{
  private element: HTMLElement;


  constructor(private elRef: ElementRef) {
    this.element = this.elRef.nativeElement;
  }

  ngOnInit(): void {
    console.log("hover-fade Init is called");
    this.element.style.filter = 'brightness(50%)';
  }
}


@NgModule({
  declarations: [HoverFadeDirective],
  exports: [HoverFadeDirective]
})
export class HoverFadeDirectiveModule{}