import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByTheme',
})

@Injectable()

export class FilterByThemePipe implements PipeTransform {

    transform(array: any[], filter: any): any {

        if (filter.themes.id == null || filter.themes.id === 0 || array == null) {
            return array;
        }

        return array.filter(themes => {
            let shouldInclude: boolean = themes.id === filter.themes.id;
            return filter.include ? shouldInclude : !shouldInclude;
        });
  
 // transform(value: numer, ...args) {
 //   return value.toLowerCase();
  }
}
