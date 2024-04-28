import { Component, Input } from '@angular/core';

@Component({
  selector: 'sm-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  @Input() postPicture: string = './assets/default_picture.jpg';

}
