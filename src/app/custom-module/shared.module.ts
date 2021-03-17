import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';

const modules: any[] = [
  CommonModule,
  FormsModule,
  RouterModule,
  MaterialModule,
];

@NgModule({
  imports: [...modules],
  exports: [...modules],
})

export class SharedModule { }
