import { Component, Input } from '@angular/core';

@Component({
  selector: 'sm-post-picture',
  templateUrl: './post-picture.component.html',
  styleUrls: ['./post-picture.component.css']
})
export class PostPictureComponent {
  @Input() picturePath: string;
  @Input() onErrorPicturePath: string;
}
