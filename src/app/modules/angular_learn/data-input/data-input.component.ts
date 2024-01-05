import { Component, Input } from '@angular/core';

@Component({
  selector: 'iHD-data-input',
  standalone: true,
  imports: [],
  templateUrl: './data-input.component.html',
  styleUrl: './data-input.component.scss',
})
export class DataInputComponent {
  @Input({ required: true, transform: convertToString }) title:string = '';

  constructor() {
    setTimeout(() => {
      this.title = 'tdf'
    }, 5000)
  }
}

function convertToString(value: number | string | undefined | null):string {
  return value?.toString().toUpperCase() || '';
}
