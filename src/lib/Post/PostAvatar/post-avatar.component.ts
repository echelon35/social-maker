import { Component, Input, Optional } from '@angular/core';
import { SMPostComponent } from '../Post/post.component';
import { SMPostHeaderComponent } from '../PostHeader/post-header.component';

enum AvatarShape {
  round = 'round',
  square = 'square'
}

@Component({
  selector: 'sm-post-avatar',
  templateUrl: './post-avatar.component.html',
  styleUrls: ['./post-avatar.component.css'],
})
export class SMPostAvatarComponent {
  @Input() avatarPath: string;
  @Input() avatarShape: AvatarShape = AvatarShape.round;
  @Input() avatarLink: string = '';

  constructor(@Optional() postUser: SMPostHeaderComponent){
    if (postUser === null){
      throw new Error("PostAvatar can only be used inside of PostUser")
    }

  }

  ngOnInit(){
    console.log(this.avatarPath);
  }
}
