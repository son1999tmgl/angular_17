import { Component } from '@angular/core';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { DataInputComponent } from '../data-input/data-input.component';
import { DataOutputComponent } from '../data-output/data-output.component';

@Component({
  selector: 'app-stand-alone',
  standalone: true,
  imports: [
    SharedModule,
    DataInputComponent,
    DataOutputComponent
  ],
  templateUrl: './stand-alone.component.html',
  styleUrl: './stand-alone.component.scss'
})
export class StandAloneComponent {
  inputTitle: string = 'standalone';
  helloWorld() { }
  changeValue(number:any) {
    console.log('number: ', number);

  }
}
