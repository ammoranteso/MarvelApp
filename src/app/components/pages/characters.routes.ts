import { Routes, RouterModule } from '@angular/router';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { CharactersComponent } from './characters/characters.component';
import { ComicsComponent } from './comics/comics.component';
import { WrapperMenuComponent } from './wrapper-menu/wrapper-menu.component';

const ROUTES: Routes = [
  {
    path: '',
    component: WrapperMenuComponent,
    children: [
      {
        path: 'heroes',
        component: CharactersComponent,
      },
      {
        path: 'detail/:id',
        component: HeroDetailComponent
      },
      {
        path: 'comics',
        component: ComicsComponent
      },

    ]
  },
];

export const HEROES_ROUTES = RouterModule.forChild(ROUTES);
