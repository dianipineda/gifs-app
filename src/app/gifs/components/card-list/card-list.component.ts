import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
})
export class CardListComponent {
  @Input()
  public list: Gif[] = [];
}
//TODO:
//todo: voy a llamar el servicio de gifs.service.ts
//todo: la propieda list voy a iguallarla al metodo loadStorage para que la lista no se me vacie
