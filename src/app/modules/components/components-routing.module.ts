import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StandAloneComponent } from './stand-alone/stand-alone.component';
import { NgModulesComponent } from './ng-modules/ng-modules.component';

const routes: Routes = [
  { path: 'standAlone', component: StandAloneComponent },
  { path: 'ngModule', component: NgModulesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
