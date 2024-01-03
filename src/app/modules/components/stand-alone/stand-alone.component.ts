import { Component } from '@angular/core';
import { NgModulesComponent } from '../ng-modules/ng-modules.component';
import { HightLightDirective } from '../../../shared/selected/hight-light.directive';
@Component({
  selector: 'app-stand-alone',
  standalone: true,
  imports: [
    NgModulesComponent,
    HightLightDirective
  ],
  templateUrl: './stand-alone.component.html',
  styleUrl: './stand-alone.component.scss'
})
export class StandAloneComponent {

}
