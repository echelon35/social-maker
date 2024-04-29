import { Component, Input } from '@angular/core';
import { IPostUser } from './IPostUser';
import { SMPostComponent } from '../../Post/post.component';

@Component({
  selector: 'sm-post-user',
  templateUrl: './post-user.component.html',
  styleUrls: ['./post-user.component.css']
})
export class SMPostUserComponent {
  @Input() user: IPostUser;
  @Input() profileLink: string;
  @Input() creationDate: string;

  constructor(post: SMPostComponent){
    if (post === null){
      throw new Error("PostUser can only be used inside of Post")
    }
  }
}
