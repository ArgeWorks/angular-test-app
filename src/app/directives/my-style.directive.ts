import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMyStyle]'
})
export class MyStyleDirective implements OnChanges{
  @Input('appMyStyle') appMyStyle;

  constructor(
      private element: ElementRef,
      private renderer: Renderer2
  ) { }

  ngOnChanges(): void {
    for (let key in this.appMyStyle) {
      this.renderer.setStyle(this.element.nativeElement, key, this.appMyStyle[key]);
    }
  }

}
