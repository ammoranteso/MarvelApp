import { NgModule } from '@angular/core';
import { PaginationComponent } from './pagination/pagination/pagination.component';
import { SharedModule } from 'src/app/custom-module/shared.module';



@NgModule({
  declarations: [
    PaginationComponent,
  ],
  imports: [
    SharedModule
  ],
  exports: [
    PaginationComponent,
  ]

})
export class UiModule { }
