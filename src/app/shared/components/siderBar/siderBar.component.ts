import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-siderBar',
  templateUrl: './siderBar.component.html',
  styleUrls: ['./siderBar.component.css'],
})
export class SiderBarComponent {
  constructor(private gifsService: GifsService) {
    if (this.gifsService.TagsHistory.length > 0)
      this.searchGif(this.gifsService.TagsHistory[0]);
  }

  get items(): string[] {
    return this.gifsService.TagsHistory;
  }

  searchGif(item: string) {
    this.gifsService.searchTag(item);
  }
}
