import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'hr/heroes',
    pathMatch: 'full'
  },
  {
    path: 'hr',
    loadChildren: () => import('./components/pages/characters.module')
      .then(m => m.CharactersModule)
  }
];
