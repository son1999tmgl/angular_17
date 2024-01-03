import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHightLight]',
  standalone: true
})
export class HightLightDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.color = '#a6da7f';
  }

}
