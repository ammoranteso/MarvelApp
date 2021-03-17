import { NgModule } from '@angular/core';
import { CharactersComponent } from './characters/characters.component';
import { HEROES_ROUTES } from './characters.routes';
import { CommonModule } from '@angular/common';
import { WrapperMenuComponent } from './wrapper-menu/wrapper-menu.component';
import { ComicsComponent } from './comics/comics.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { ImageUrlPipe } from '../shared/Pipes/image-url/image-url.pipe';
import { PaginationPipe } from '../shared/Pipes/pagination/pagination.pipe';
import { SharedModule } from 'src/app/custom-module/shared.module';
import { UiModule } from '../shared/ui/ui.module';



@NgModule({
  declarations: [
    CharactersComponent,
    WrapperMenuComponent,
    ComicsComponent,
    HeroDetailComponent,
    ImageUrlPipe,
    PaginationPipe,
  ],
  imports: [
    CommonModule,
    SharedModule,
    UiModule,
    HEROES_ROUTES,
  ]
})
export class CharactersModule { }
