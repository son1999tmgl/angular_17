import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StandAloneComponent } from './stand-alone/stand-alone.component';
import { NgModulesComponent } from './ng-modules/ng-modules.component';
import { ShadowDomComponent } from './scopeStyle/shadow-dom/shadow-dom.component';
import { EmulatedComponent } from './scopeStyle/emulated/emulated.component';
import { NoneComponent } from './scopeStyle/none/none.component';

const routes: Routes = [
  { path: 'standAlone', component: StandAloneComponent },
  { path: 'ngModule', component: NgModulesComponent },
  { path: 'shadownDom', component: ShadowDomComponent },
  { path: 'emulated', component: EmulatedComponent },
  { path: 'none', component: NoneComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
