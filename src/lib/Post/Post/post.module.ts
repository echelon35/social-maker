import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SMPostComponent } from './post.component';
import { SMPostAvatarComponent } from '../PostAvatar/post-avatar.component';
import { SMPostHeaderComponent } from '../PostHeader/post-header.component';
import { SMPostContentComponent } from '../PostContent/post-content.component';
import { GlobalModule } from '../../Global/global.module';
import { PostUsernameComponent } from '../PostUsername/post-username.component';
import { DirectiveModule } from '../../Directives/directive.module';
import { PostPictureComponent } from '../PostPicture/post-picture.component';
import { PostVideoComponent } from '../PostVideo/post-video.component';
import { PostCommentsComponent } from '../PostComments/post-comments.component';

@NgModule({
  declarations: [
    SMPostComponent,
    SMPostHeaderComponent,
    SMPostAvatarComponent,
    SMPostContentComponent,
    PostUsernameComponent,
    PostPictureComponent,
    PostVideoComponent,
    PostCommentsComponent
  ],
  imports: [
    CommonModule,
    GlobalModule,
    DirectiveModule
  ],
  exports: [
    SMPostComponent,
    SMPostAvatarComponent,
    SMPostHeaderComponent,
    SMPostContentComponent,
    PostUsernameComponent,
    PostPictureComponent,
    PostVideoComponent,
    PostCommentsComponent
  ]
})
export class PostModule { }
