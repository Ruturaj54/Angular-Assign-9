import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myAdd',
  standalone: true
})
export class MyAddPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {

    var Sum : number = 0;

    Sum = value + args[0];
    return Sum;
  }

}
