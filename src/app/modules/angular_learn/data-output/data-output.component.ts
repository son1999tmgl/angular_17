import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'iHD-data-output',
  standalone: true,
  imports: [],
  templateUrl: './data-output.component.html',
  styleUrl: './data-output.component.scss'
})
export class DataOutputComponent implements OnInit {
  @Output('valuechange') changed = new EventEmitter<number>();
  ngOnInit(): void {
    setTimeout(() => {
      this.changed.emit(Math.random())
    }, 5000)
  }
}
