import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiderBarComponent } from './components/siderBar/siderBar.component';

@NgModule({
  declarations: [SiderBarComponent],
  imports: [CommonModule],
  exports: [SiderBarComponent],
})
export class SharedModule {}
