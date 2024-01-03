import { Component, ViewEncapsulation } from '@angular/core';
import { EmulatedComponent } from '../emulated/emulated.component';

@Component({
  selector: 'app-shadow-dom',
  standalone: true,
  imports: [EmulatedComponent],
  templateUrl: './shadow-dom.component.html',
  styleUrl: './shadow-dom.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ShadowDomComponent {

}
