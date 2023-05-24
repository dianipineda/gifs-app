import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GifsService {
  private _tagsHistory: string[] = [];

  constructor() {}
  //este spread se puso para que el arreglo original este seguro, pues el spread hace una copia de el, en caso de ser modificado se modificara la copia y no el original
  get TagsHistory() {
    return [...this._tagsHistory];
  }

  searchTag(tag: string): void {
    this._tagsHistory.unshift(tag);
  }
}
