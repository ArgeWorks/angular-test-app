import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCountArr',
  pure: false
})
export class MyCountArrPipe implements PipeTransform {

  transform(value: any[]): any {
    let res = 0;
    value.forEach(item => res += item);
    return res;
  }
}
