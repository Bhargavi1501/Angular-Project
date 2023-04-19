import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'expert'
})
export class ExpertPipe implements PipeTransform {

  transform(searchText: string, items: any[]): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();

    return items.filter(it=> {
      return it.toLowerCase().includes(searchText);
    });
  }

}
