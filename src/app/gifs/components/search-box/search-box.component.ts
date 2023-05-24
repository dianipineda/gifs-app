import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar:</h5>
    <input
      type="text"
      class="form-control"
      placeholder="Buscar gifs... "
      (keyup.enter)="searchTag()"
      #txtTagInput
    />
  `,
})
export class SearchBoxComponent {
  //ElementRef es un tipado de typeScript que es una referencia a un elemento html en el cual yo tengo que especificar que tipo de elemento estoy haciendo referencia
  //eL ViewChild nos sirve a nosotros para tomar una referencia local
  constructor(private gifsService: GifsService) {}

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;
  //con el vieChild no necesito mandarle un parametro de que reciba un tipo string porque ese elemento yo ya lo tengo en el elemeto tagInput
  searchTag() {
    const newTag = this.tagInput.nativeElement.value;
    this.gifsService.searchTag(newTag);
    this.tagInput.nativeElement.value = '';
  }
}
