import { Component, Input } from '@angular/core';
import { SMPostAvatarComponent } from '../PostAvatar/post-avatar.component';

@Component({
  selector: 'sm-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class SMPostComponent {

  @Input() postPicture: string = './assets/default_picture.jpg';

}
