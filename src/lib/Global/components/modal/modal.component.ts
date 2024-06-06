import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'sm-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() title: string = '';
  @Input() modalId: string = '';
  @Output() confirmAction: EventEmitter<void> = new EventEmitter();
  @Output() closeAction: EventEmitter<void> = new EventEmitter();

  close() {
    this.closeAction.emit();
  }

  confirm() {
    this.confirmAction.emit();
  }
}
