import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: any, args: string[]): any {
    let limit  = (args && args[0]) ? parseInt(args[0]) : 50;
    if (value && value.length >= limit) {
      return value.substring(0, limit) + "...";
    }
    return value;
  }

}
