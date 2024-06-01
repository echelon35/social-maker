import { Component, Input } from '@angular/core';
import { IPostUser } from './IPostUser';
import { SMPostComponent } from '../Post/post.component';
import { IThreeDotsOptions } from '../../Global/three-dots/IThreeDotsOptions';

@Component({
  selector: 'sm-post-header',
  templateUrl: './post-header.component.html',
  styleUrls: ['./post-header.component.css']
})
export class SMPostHeaderComponent {
  @Input() user: IPostUser;
  @Input() profileLink: string;
  @Input() creationDate: string;
  headerOptions: IThreeDotsOptions[] = [];

  constructor(post: SMPostComponent){
    if (post === null){
      throw new Error("PostUser can only be used inside of Post")
    }
    const modify_img = new Image(); 
    this.headerOptions = [
      {
        label: "Modifier",
        callbackFunction: () => { window.location.href = 'localhost:4200'},
        srcIcon: "/assets/lucidesvg/edit.svg"
      },
      {
        label: "Supprimer",
        callbackFunction: () => { console.log('Supprimer')}
      },
      {
        label: "Signaler",
        callbackFunction: () => { window.location.href = 'localhost:4200'}
      },
    ]
  }
}
