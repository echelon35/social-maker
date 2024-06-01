import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThreeDotsComponent } from './three-dots/three-dots.component';

@NgModule({
  declarations: [
    ThreeDotsComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ThreeDotsComponent
  ]
})
export class GlobalModule { }
