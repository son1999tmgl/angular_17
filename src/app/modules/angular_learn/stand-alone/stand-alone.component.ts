import { Component } from '@angular/core';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { DataInputComponent } from '../data-input/data-input.component';

@Component({
  selector: 'app-stand-alone',
  standalone: true,
  imports: [
    SharedModule,
    DataInputComponent
  ],
  templateUrl: './stand-alone.component.html',
  styleUrl: './stand-alone.component.scss'
})
export class StandAloneComponent {
  inputTitle: string = 'standalone';
  helloWorld() { }
}
