import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';
import { GifsCardComponent } from '../gifs-card/gifs-card.component';

@Component({
  selector: 'list-card',
  templateUrl: './card-list.component.html',
})
export class CardListComponent {
  constructor() {}
  @Input()
  public list: Gif[] = [];
}
