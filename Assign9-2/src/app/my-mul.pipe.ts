import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMul',
  standalone: true
})
export class MyMulPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    
    var Ans : number = 0;

    Ans = value * args[0]; 
    return Ans;

  }

}
