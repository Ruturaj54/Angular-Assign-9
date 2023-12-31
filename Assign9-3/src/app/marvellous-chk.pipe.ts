import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk',
  standalone: true
})
export class MarvellousChkPipe implements PipeTransform {

  transform(value: number,Param : string): string
  {
    var flag = 0;
    if(Param == "Even")
    {
      if(value % 2 == 0)
      {
        return "It is an Even number";
      }
      else
      {
        return "It is Not a Even number";
      }
    }
    if(Param == "Prime")
    {
      if(value == 0 || value == 1)
      {
        return "It is an Not a prime number";
      }
      else 
      {
        for(var i = 2;i <= value/2;i++)
        {
          if(value % i == 0)
          {
             flag = 1;
          }
        }
        if(flag == 1)
        {
          return "It is not a prime Number";
        }
        else
        {
          return "It is a Prime number";
        }
      }
    }

    if(Param == "Perfect")
    {
      var Sum : number = 0;

      for(var i = 1;i <= value/2;i++)
      {
        if(value % i == 0)
        {
          Sum = Sum + i;
        }
      }

      if(Sum == value)
      {
        return "It is a Perfect Number";
      }
      else
      {
        return "It is Not perfect Number";
      }
    }

    if(Param == "Odd")
    {
      if(value % 2 != 0)
      {
        return "It is an Odd Number";
      }
      else
      {
        return "It is Not Odd Number";
      }
    }

    return "Please Enter valid Parameter like :Even,Odd,Prime,Perfet";
  }

}
