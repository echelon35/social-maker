import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HideMissingPictureDirective } from '../Directives/HideMissingPicture/hide-missing-picture.directive';

@NgModule({
  declarations: [
    HideMissingPictureDirective
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HideMissingPictureDirective
  ]
})
export class DirectiveModule { }
