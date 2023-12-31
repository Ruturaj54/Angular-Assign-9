import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev',
  standalone: true
})
export class MyRevPipe implements PipeTransform 
{

  transform(value : string): string 
  {
    let temp : string = "";
    
    for(var i = value.length;i >= 0;i--)
    {
        temp = temp + value.charAt(i);
    }
    return temp;
  }

}
