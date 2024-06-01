import { NgModule } from '@angular/core';
import { SocialMakerComponent } from './social-maker.component';
import { PostModule } from './Post/Post/post.module';


@NgModule({
  declarations: [
    SocialMakerComponent,
  ],
  imports: [
    PostModule
  ],
  exports: [
    SocialMakerComponent,
    PostModule
  ]
})
export class SocialMakerModule { }
