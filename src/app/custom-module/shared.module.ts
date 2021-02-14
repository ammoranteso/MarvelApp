import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

const modules: any[] = [
  CommonModule,
  FormsModule,
  RouterModule,
]

@NgModule({
  imports: [...modules],
  exports: [...modules],
})

export class SharedModule { }
