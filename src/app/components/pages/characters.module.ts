import { NgModule } from '@angular/core';
import { CharactersComponent } from './characters/characters.component';
import { HEROES_ROUTES } from './characters.routes';
import { CommonModule } from '@angular/common';
import { WrapperMenuComponent } from './wrapper-menu/wrapper-menu.component';
import { ComicsComponent } from './comics/comics.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { ImageUrlPipe } from '../shared/Pipes/image-url/image-url.pipe';



@NgModule({
  declarations: [
    CharactersComponent,
    WrapperMenuComponent,
    ComicsComponent,
    HeroDetailComponent,
    ImageUrlPipe,
  ],
  imports: [
    CommonModule,
    HEROES_ROUTES,
  ]
})
export class CharactersModule { }
