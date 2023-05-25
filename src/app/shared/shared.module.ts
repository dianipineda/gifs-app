import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiderBarComponent } from './components/siderBar/siderBar.component';
import { HomePageComponent } from '../gifs/pages/homePage/home-page.component';

@NgModule({
  declarations: [SiderBarComponent],
  imports: [CommonModule],
  exports: [SiderBarComponent],
})
export class SharedModule {}
