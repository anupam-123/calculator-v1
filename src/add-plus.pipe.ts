import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addPlus',
  standalone: true,
})
export class AddPlusPipe implements PipeTransform {
  transform(value: string): string {
    return value.split('').join('+');
  }
}
