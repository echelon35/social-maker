import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SMPostComponent } from './post.component';
import { SMPostAvatarComponent } from '../PostAvatar/post-avatar.component';
import { SMPostUserComponent } from '../PostUser/postuser/post-user.component';

@NgModule({
  declarations: [
    SMPostComponent,
    SMPostAvatarComponent,
    SMPostUserComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SMPostComponent,
    SMPostAvatarComponent,
    SMPostUserComponent
  ]
})
export class PostModule { }
