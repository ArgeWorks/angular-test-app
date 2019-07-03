import { Directive, Input, OnChanges, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyFor]'
})
export class MyForDirective implements OnChanges {
  @Input() appMyForOf: any[];

  constructor(
      private templateRef: TemplateRef<any>,
      private viewContainer: ViewContainerRef
  ) { }

  ngOnChanges() {
    for (let item of this.appMyForOf) {
      this.viewContainer.createEmbeddedView(this.templateRef, {
        $implicid: item,
        index: this.appMyForOf.indexOf(item)
      });
    }
  }

}
