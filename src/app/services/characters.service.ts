import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { Character } from '../shared/character';

@Injectable()
export class CharactersService {
  constructor(private http: Http) {
  }

  /**
   * Load Characters from the static characters.json data, usually an API URL.
   *
   * @return {Observable<Character[]>} A list of Characters.
   */
  getCharacters(): Observable<Character[]> {
    return this.http.get('https://spreadsheets.google.com/feeds/list/13SGWMJmkLWRxD8rK6DWOEF6Isn7ri_BbKJphQreVsXs/od6/public/values?alt=json')
    // return this.http.get('assets/characters.json')
      .map(res => this.callback(res.json()))
    //   .map(res => res.json())
      .catch(res => {
          return Observable.throw(res);
      });
  }

  callback(data): Object {
      var rows = [];
      var cells = data.feed.entry;

      for (var i = 0; i < cells.length; i++){
          var rowObj = {name:""};
          rowObj.name = cells[i].title.$t;

          var rowCols = cells[i].content.$t.split(', ');
          for (var j = 0; j < rowCols.length; j++){
              var keyVal = rowCols[j].split(': ');
              rowObj[keyVal[0]] = keyVal[1];
          }
          rows.push(rowObj);
      }
      return rows;
  }
}
