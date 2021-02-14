import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ROUTES } from '../app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: []

})
export class CoreModule { }
