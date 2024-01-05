import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StandAloneComponent } from './stand-alone/stand-alone.component';

const routes: Routes = [
  {
    path: 'standAlone',
    component: StandAloneComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularLearnRoutingModule { }
