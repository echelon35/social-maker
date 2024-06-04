import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appHideMissingPicture]'
})
export class HideMissingPictureDirective {

  @Input() display: boolean = true;
  @Input() picturePath: string = "";

  constructor(private el:ElementRef) { 
  }

  @HostListener("error")
  private onError() {
    console.log("en erreur")
    if(this.display){
      this.el.nativeElement.src = this.picturePath;
      this.el.nativeElement.title += " introuvable"
    }
    else{
      this.el.nativeElement.style.display = "none";
    }
  }

}
