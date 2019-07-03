import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMyClass]'
})
export class MyClassDirective implements OnChanges {
  @Input('appMyClass') appMyClass;

  constructor(
      private element: ElementRef,
      private renderer: Renderer2
  ) { }

  ngOnChanges(): void {
    for (let key in this.appMyClass) {
      if (this.appMyClass[key]) {
        this.renderer.addClass(this.element.nativeElement, key);
      } else {
        this.renderer.removeClass(this.element.nativeElement, key);
      }
    }
  }
}
