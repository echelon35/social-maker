import { Component, Input } from '@angular/core';
import { ModalService } from '../../Global/services/modal.service';

export type post_like = {
  liked: boolean;
  reactionEmoji: string;
  userId: number;
}

@Component({
  selector: 'sm-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.css']
})
export class PostCommentsComponent {
  @Input() id: string;
  @Input() nbLikes: number;
  @Input() nbComment: number;
  @Input() likes: post_like[];
  modalsState: { [key: string]: boolean } = {};
  reactionsDisplayed: boolean = false;

  constructor(private modalService: ModalService){}

  ngOnInit() {
    this.modalService.modalState$.subscribe(({ id, state }) => {
      this.modalsState[id] = state;
    });

    console.log(this.nbLikes);
  }

  showReactions(){
    this.reactionsDisplayed = !this.reactionsDisplayed;
    if(this.reactionsDisplayed){
      this.openModal('reactions-' + this.id)
    }
    else{
      this.onClose('reactions-' + this.id)
    }
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  onClose(id: string) {
    this.modalService.close(id);
  }

  onConfirm(id: string) {
    // Add your confirm logic here
    this.modalService.close(id);
  }
}
