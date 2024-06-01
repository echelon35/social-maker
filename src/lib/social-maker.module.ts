import { NgModule } from '@angular/core';
import { SocialMakerComponent } from './social-maker.component';
import { PostModule } from './Post/Post/post.module';
import { ThreeDotsComponent } from './Global/three-dots/three-dots.component';


@NgModule({
  declarations: [
    SocialMakerComponent,
    ThreeDotsComponent,
  ],
  imports: [
    PostModule
  ],
  exports: [
    SocialMakerComponent,
    PostModule,
  ]
})
export class SocialMakerModule { }
