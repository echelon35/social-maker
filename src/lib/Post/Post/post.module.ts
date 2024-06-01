import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SMPostComponent } from './post.component';
import { SMPostAvatarComponent } from '../PostAvatar/post-avatar.component';
import { SMPostHeaderComponent } from '../PostHeader/post-header.component';
import { SMPostContentComponent } from '../PostContent/post-content.component';
import { GlobalModule } from '../../Global/global.module';

@NgModule({
  declarations: [
    SMPostComponent,
    SMPostHeaderComponent,
    SMPostAvatarComponent,
    SMPostContentComponent
  ],
  imports: [
    CommonModule,
    GlobalModule
  ],
  exports: [
    SMPostComponent,
    SMPostAvatarComponent,
    SMPostHeaderComponent,
    SMPostContentComponent
  ]
})
export class PostModule { }
