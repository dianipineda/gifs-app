import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-siderBar',
  templateUrl: './siderBar.component.html',
  styleUrls: ['./siderBar.component.css'],
})
export class SiderBarComponent {
  constructor(private gifsService: GifsService) {}

  //este getter viene a ser el array para mi ngFor en el template
  get items(): string[] {
    return this.gifsService.TagsHistory;
  }

  searchGif(item: string) {
    this.gifsService.searchTag(item);
  }
}
//TODO:
//todo la propiedad getter de items debe igualarse al loadStorage para que los botones no me desaparezcan cuando recargo el navegador
//! no se como hacer que me traigan los items del primer valor de la lista ( revisarlo)
