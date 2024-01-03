import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'components',
    loadChildren: () => import('./modules/components/components.module').then(m => m.ComponentsModule)
  }
];
