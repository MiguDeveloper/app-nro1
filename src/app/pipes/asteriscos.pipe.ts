import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asteriscos'
})
export class AsteriscosPipe implements PipeTransform {

  transform(value: string, args?: boolean): string {
    let letras = value.split('');
    let asteriscos: string = '';
    if (!args){
      for (let letra of letras){
        asteriscos += '*';
      }
      return asteriscos;
    }

    return value;
  }

}
