import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'poisto'
})
export class PoistoPipe implements PipeTransform {

  transform(nimi: string): any {
    const n = nimi.indexOf("(");
    return nimi.substring(0,n);
  }

}
