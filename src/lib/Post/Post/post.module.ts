import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SMPostComponent } from './post.component';
import { SMPostAvatarComponent } from '../PostAvatar/post-avatar.component';
import { SMPostUserComponent } from '../PostUser/postuser/post-user.component';
import { SMPostContentComponent } from '../PostContent/post-content.component';

@NgModule({
  declarations: [
    SMPostComponent,
    SMPostAvatarComponent,
    SMPostUserComponent,
    SMPostContentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SMPostComponent,
    SMPostAvatarComponent,
    SMPostUserComponent,
    SMPostContentComponent
  ]
})
export class PostModule { }
