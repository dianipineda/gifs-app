import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { CardListComponent } from './components/card-list/card-list.component';
import { GifsCardComponent } from './components/gifs-card/gifs-card.component';
import { HomePageComponent } from './pages/homePage/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';

@NgModule({
  declarations: [
    CardListComponent,
    GifsCardComponent,
    HomePageComponent,
    SearchBoxComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [HomePageComponent],
})
export class GifsModule {}
