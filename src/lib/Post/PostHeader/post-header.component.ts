import { Component, Input } from '@angular/core';
import { IPostUser } from './IPostUser';
import { SMPostComponent } from '../Post/post.component';
import { IThreeDotsOptions } from '../../Global/three-dots/IThreeDotsOptions';

export enum PostStyle {
  LinkedIn = "LinkedIn",
  Insta = "Insta",
  Facebook = "Facebook",
  x = "x"
}

@Component({
  selector: 'sm-post-header',
  templateUrl: './post-header.component.html',
  styleUrls: ['./post-header.component.css']
})
export class SMPostHeaderComponent {
  @Input() smlayout: keyof typeof PostStyle = "Insta";

  constructor(post: SMPostComponent){
    if (post === null){
      throw new Error("PostHeader can only be used inside of Post")
    }
  }
}
