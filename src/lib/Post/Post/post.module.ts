import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SMPostComponent } from './post.component';
import { SMPostAvatarComponent } from '../PostAvatar/post-avatar.component';
import { SMPostHeaderComponent } from '../PostHeader/post-header.component';
import { SMPostContentComponent } from '../PostContent/post-content.component';
import { GlobalModule } from '../../Global/global.module';
import { PostUsernameComponent } from '../PostUsername/post-username.component';

@NgModule({
  declarations: [
    SMPostComponent,
    SMPostHeaderComponent,
    SMPostAvatarComponent,
    SMPostContentComponent,
    PostUsernameComponent,
  ],
  imports: [
    CommonModule,
    GlobalModule
  ],
  exports: [
    SMPostComponent,
    SMPostAvatarComponent,
    SMPostHeaderComponent,
    SMPostContentComponent,
    PostUsernameComponent
  ]
})
export class PostModule { }
