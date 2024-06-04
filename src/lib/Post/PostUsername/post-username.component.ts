import { Component, Input } from '@angular/core';

@Component({
  selector: 'sm-post-username',
  templateUrl: './post-username.component.html',
  styleUrls: ['./post-username.component.css']
})
export class PostUsernameComponent {
  @Input() username: string;
}
