import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StandAloneComponent } from './stand-alone/stand-alone.component';
import { DataInputComponent } from './data-input/data-input.component';
import { DataOutputComponent } from './data-output/data-output.component';

const routes: Routes = [
  {
    path: 'components/standAlone',
    component: StandAloneComponent
  },
  {
    path: 'components/data-input',
    component: DataInputComponent
  },
  {
    path: 'components/data-output',
    component: DataOutputComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularLearnRoutingModule { }
