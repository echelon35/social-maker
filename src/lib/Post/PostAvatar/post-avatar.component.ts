import { Component, Input } from '@angular/core';

enum AvatarShape {
  round = 'round',
  square = 'square'
}

@Component({
  selector: 'sm-post-avatar',
  templateUrl: './post-avatar.component.html',
  styleUrls: ['./post-avatar.component.css']
})
export class PostAvatarComponent {
  @Input() avatarPath: string = './assets/default_picture.jpg';
  @Input() avatarShape: AvatarShape = AvatarShape.round;
}
