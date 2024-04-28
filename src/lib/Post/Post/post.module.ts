import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { PostAvatarComponent } from '../PostAvatar/post-avatar.component';
import { PostUserComponent } from '../PostUser/postuser/post-user.component';



@NgModule({
  declarations: [
    PostComponent,
    PostAvatarComponent,
    PostUserComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PostComponent,
    PostAvatarComponent,
    PostUserComponent
  ]
})
export class PostModule { }
