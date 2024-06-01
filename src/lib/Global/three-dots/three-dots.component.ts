import { Component, HostListener, Input } from '@angular/core';
import { IThreeDotsOptions } from './IThreeDotsOptions';

@Component({
  selector: 'sm-three-dots',
  templateUrl: './three-dots.component.html',
  styleUrls: ['./three-dots.component.css']
})
export class ThreeDotsComponent {

  @Input() options: IThreeDotsOptions[];
  @Input() name: string;

  showDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
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

}
