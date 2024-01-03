import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { NgModulesComponent } from './ng-modules/ng-modules.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    NgModulesComponent
  ]
})
export class ComponentsModule { }
