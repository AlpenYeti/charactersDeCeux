import { Pipe, PipeTransform } from '@angular/core';

import { Character } from './character';

@Pipe({
    name: 'characterfilter',
    pure: false
})
export class CharacterFilterPipe implements PipeTransform {
  transform(items: Character[], filter: Character): Character[] {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    return items.filter((item: Character) => this.applyFilter(item, filter));
  }

  /**
   * Perform the filtering.
   *
   * @param {Character} character The character to compare to the filter.
   * @param {Character} filter The filter to apply.
   * @return {boolean} True if character satisfies filters, false if not.
   */
  applyFilter(character: Character, filter: Character): boolean {
    for (const field in filter) {
      if (filter[field] && character[field]) {
        if (typeof filter[field] === 'string') {
          if (character[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
            return false;
          }
        } else if (typeof filter[field] === 'number') {
          if (parseInt(character[field]) !== filter[field]) {
            return false;
          }
        }
      }
    }
    return true;
  }
}
