import { Component } from '@angular/core';
import { SharedModule } from 'src/app/shared/modules/shared.module';

@Component({
  selector: 'app-stand-alone',
  standalone: true,
  imports: [
    SharedModule
  ],
  templateUrl: './stand-alone.component.html',
  styleUrl: './stand-alone.component.scss'
})
export class StandAloneComponent {
  helloWorld() { }
}
