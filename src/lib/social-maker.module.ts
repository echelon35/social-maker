import { NgModule } from '@angular/core';
import { SocialMakerComponent } from './social-maker.component';
import { PostModule } from './Post/Post/post.module';
import { ThreeDotsComponent } from './Global/three-dots/three-dots.component';
import { GlobalModule } from './Global/global.module';


@NgModule({
  declarations: [
    SocialMakerComponent,
  ],
  imports: [
    PostModule,
    GlobalModule
  ],
  exports: [
    SocialMakerComponent,
    PostModule,
    GlobalModule
  ]
})
export class SocialMakerModule { }
