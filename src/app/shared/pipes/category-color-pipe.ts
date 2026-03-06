import { Pipe, PipeTransform } from '@angular/core';
import { CATEGORIAS } from 'src/app/core/constants/categorias';

@Pipe({
  name: 'categoryColor',
  standalone: false,
})
export class CategoryColorPipe implements PipeTransform {

  transform(categoria: string): string {

    const cat = CATEGORIAS.find(c => c.nombre === categoria);

    return cat ? cat.color : 'medium';

  }

}
