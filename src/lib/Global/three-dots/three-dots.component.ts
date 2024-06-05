import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { IThreeDotsOptions } from './IThreeDotsOptions';

@Component({
  selector: 'sm-three-dots',
  templateUrl: './three-dots.component.html',
  styleUrls: ['./three-dots.component.css']
})
export class ThreeDotsComponent {

  @Input() options: IThreeDotsOptions[];
  @Output() optionClicked: EventEmitter<IThreeDotsOptions> = new EventEmitter<IThreeDotsOptions>();
  @Input() name: string;
  @Input() id: string;

  showDropdown() {
    document.getElementById(this.id).classList.toggle("show");
  }

  @HostListener('window:click', ['$event'])
  onclick(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
  }

  onOptionClick(item: IThreeDotsOptions): void {
    this.optionClicked.emit(item)
  }

}
