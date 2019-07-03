import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myTime'
})
export class MyTimePipe implements PipeTransform {

  transform(timeStamp: number, locale: string = 'en-US', options: string): any {

    let date = new Date(timeStamp * 1000);
    // let date = new Date();

    // console.log(options);

    let defOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'short',
      timezone: 'Europe/Kiev',
      hour: 'numeric',
      hour12: false,
      minute: 'numeric'
    };

    return date.toLocaleString(locale, options ? JSON.parse(options) : defOptions);
  }

}
