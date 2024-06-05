import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SMPostComponent } from '../Post/post.component';

@Component({
  selector: 'sm-post-content',
  templateUrl: './post-content.component.html',
  styleUrls: ['./post-content.component.css']
})
export class SMPostContentComponent {
  @Input() postContent: any;
  @Output() onMoreContent: EventEmitter<any> = new EventEmitter();
  @Input() maxTextSize: number = 50;

  constructor(post: SMPostComponent){
    if (post === null){
      throw new Error("PostContent can only be used inside of Post")
    }
  }

  onClickOnMoreContent(): void {
    this.onMoreContent.emit();
  }
}
