import { Component, Input } from '@angular/core';
import { IPostUser } from './IPostUser';

@Component({
  selector: 'sm-post-user',
  templateUrl: './post-user.component.html',
  styleUrls: ['./post-user.component.css']
})
export class PostUserComponent {
  @Input() user: IPostUser;
}
