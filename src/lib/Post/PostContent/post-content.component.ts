import { Component, Input } from '@angular/core';
import { SMPostComponent } from '../Post/post.component';

@Component({
  selector: 'sm-post-content',
  templateUrl: './post-content.component.html',
  styleUrls: ['./post-content.component.css']
})
export class SMPostContentComponent {
  @Input() postContent: any;

  constructor(post: SMPostComponent){
    if (post === null){
      throw new Error("PostContent can only be used inside of Post")
    }
  }
}
