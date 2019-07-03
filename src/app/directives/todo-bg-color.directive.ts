import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTodoBgColor]',
})
export class TodoBgColorDirective implements OnInit{
  @Input('appTodoBgColor') appTodoBgColor;

  constructor(
      private element: ElementRef,
      private renderer: Renderer2
  ) {

  }

  ngOnInit(): void {

    if (this.appTodoBgColor) {
      this.renderer.setStyle(this.element.nativeElement, 'background', '#28a745');
      this.renderer.setStyle(this.element.nativeElement, 'color', 'white');
    } else {
      this.renderer.setStyle(this.element.nativeElement, 'background', '#dc3545');
      this.renderer.setStyle(this.element.nativeElement, 'color', 'white');
    }
  }

}
