import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBg]',
  host: {
    '(click)': 'onClick()'
  }
})
export class BgDirective {
  // @Input() bgColor;
  @Input('appBg') bgColor;
  defBgColor = 'rgb(241, 241, 241)';

  constructor(
      private element: ElementRef,
      private renderer: Renderer2
  ) {
    // this.element.nativeElement.style.background = '#f1f1f1';
    this.renderer.setStyle(this.element.nativeElement, 'background', this.defBgColor);
  }

  onClick() {
    // console.log(this.bgColor);
    this.element.nativeElement.style.background === this.defBgColor ?
        this.renderer.setStyle(this.element.nativeElement, 'background', this.bgColor) :
        this.renderer.setStyle(this.element.nativeElement, 'background', this.defBgColor);

    // console.log(this.element.nativeElement.style.background);
  }

  // @HostListener('click') onClick() {
  //
  //   this.element.nativeElement.style.background === 'rgb(241, 241, 241)' ?
  //       this.renderer.setStyle(this.element.nativeElement, 'background', 'red') :
  //       this.renderer.setStyle(this.element.nativeElement, 'background', 'rgb(241, 241, 241)');
  //
  //   console.log(this.element.nativeElement.style.background);
  // }



}
