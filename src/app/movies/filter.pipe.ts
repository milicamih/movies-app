import { Pipe, PipeTransform } from '@angular/core';
import {Movie} from "../shared/models/movie";

@Pipe({
  name: 'filter',
  pure: false
})

export class FilterPipe implements PipeTransform {
  transform(items: Movie[], active: string): any {
    if (!items || !active) {
      return items;
    }
    return items.filter(item =>
      item.id.indexOf(active) !== -1);
  }
}
