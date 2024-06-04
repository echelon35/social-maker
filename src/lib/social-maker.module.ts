import { NgModule } from '@angular/core';
import { SocialMakerComponent } from './social-maker.component';
import { PostModule } from './Post/Post/post.module';
import { GlobalModule } from './Global/global.module';
import { DirectiveModule } from './Directives/directive.module';


@NgModule({
  declarations: [
    SocialMakerComponent,
  ],
  imports: [
    PostModule,
    GlobalModule,
    DirectiveModule
  ],
  exports: [
    SocialMakerComponent,
    PostModule,
    GlobalModule
  ]
})
export class SocialMakerModule { }
