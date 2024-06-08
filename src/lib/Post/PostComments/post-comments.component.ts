import { Component, Input } from '@angular/core';
import { ModalService } from '../../Global/services/modal.service';
import { post_like } from '../../Types/post_like.type';

@Component({
  selector: 'sm-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.css']
})
export class PostCommentsComponent {
  @Input() id: string;
  @Input() nbLikes: number = 0;
  @Input() nbComment: number;
  @Input() likes: post_like[];
  @Input() userLike: post_like;
  modalsState: { [key: string]: boolean } = {};
  reactionsDisplayed: boolean = false;

  likesGroupedByEmoji: { [key: string]: number } = {};

  constructor(private modalService: ModalService){}

  ngOnInit() {
    this.modalService.modalState$.subscribe(({ id, state }) => {
      this.modalsState[id] = state;
    });

  }

  getEmojiKeys(): string[] {
    return Object.keys(this.likesGroupedByEmoji);
  }

  ngOnChanges() {
    this.groupLikesByEmoji();
  }

  groupLikesByEmoji() {
    // Initialisation
    this.likesGroupedByEmoji = {};

    // Agrégation
    this.likes.forEach(like => {
      if (like.liked) {
        if (this.likesGroupedByEmoji[like.reactionEmoji]) {
          this.likesGroupedByEmoji[like.reactionEmoji]++;
        } else {
          this.likesGroupedByEmoji[like.reactionEmoji] = 1;
        }
      }
    });
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

  likePost(type: string, like: boolean) {

  }
  
}
