import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThreeDotsComponent } from './three-dots/three-dots.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    ThreeDotsComponent,
    ModalComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ThreeDotsComponent,
  ]
})
export class GlobalModule { }
