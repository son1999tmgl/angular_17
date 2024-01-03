import { Component } from '@angular/core';
import { NgModulesComponent } from '../ng-modules/ng-modules.component';

@Component({
  selector: 'app-stand-alone',
  standalone: true,
  imports: [
    NgModulesComponent
  ],
  templateUrl: './stand-alone.component.html',
  styleUrl: './stand-alone.component.scss'
})
export class StandAloneComponent {

}
