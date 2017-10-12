///<reference path="../../node_modules/@angular/core/src/animation/animation_metadata_wrapped.d.ts"/>
import { Component, Injectable, OnInit, Input, trigger, state, animate, transition, style } from '@angular/core';
import { CharactersService } from './services/characters.service';
import { Character } from './shared/character';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/min';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@Component({
  selector: 'app-main',
  styleUrls: [ './app.component.css' ],
  templateUrl: './appPic.component.html',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: '0' }),
        animate('.5s ease-out', style({ opacity: '1' })),
      ]),
    ]),
  ],
})

@Injectable()
export class AppComponent implements OnInit {
  /**
   * @type {string} name The page title.
   */
  title = 'Characters from De Ceux';

  /**
   * @type {number} numberOfCharacters The number of characters in the JSON file, used for max attribute for limit and page.
   */
  numberOfCharacters: number;

  /**
   * @type {number} limit The number of characters per page.
   */
  limit: number;

  /**
   * @type {number} page The current page.
   */
  page: number = 1;

  /**
   * @type {Character[]} characters A list of characters to output in a table.
   */
  characters: Character[];

  /**
   * @type {Character} filter The object containing the filter values to apply to characterfilter.
   */
  filter: Character = new Character();

  constructor(private charactersService: CharactersService) {
  }

  ngOnInit() {
    // Load characters from the characters service on init
    this.charactersService.getCharacters().subscribe(
      (characters: Character[]) => {
        this.characters = characters;
        //this.numberOfCharacters = this.characters.length;
        //this.limit = this.characters.length; // Start off by showing all characters on a single page.
      });
  }
}
