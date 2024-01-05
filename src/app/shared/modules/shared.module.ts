import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevExtremeModule } from '../../core/library/dexExtreme/dev-extreme.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DevExtremeModule
  ],
  exports: [
    DevExtremeModule
  ]
})
export class SharedModule { }
