import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiderBarComponent } from './components/siderBar/siderBar.component';
import { HomePageComponent } from '../gifs/pages/homePage/home-page.component';
import { LazyimageComponent } from './lazyimage/lazyimage.component';

@NgModule({
  declarations: [SiderBarComponent, LazyimageComponent],
  imports: [CommonModule],
  exports: [SiderBarComponent, LazyimageComponent],
})
export class SharedModule {}
