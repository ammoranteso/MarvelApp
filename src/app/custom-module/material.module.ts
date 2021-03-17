import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';

// MATERIAL NGX
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';

/**
 * The modules to be imported & exported
 */
const modules: any[] = [
  MatSliderModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule,
  MatIconModule,
  MatDividerModule,
  MatDialogModule,
  MatExpansionModule,
  MatTableModule,
  MatNativeDateModule,
  MatRadioModule,
  MatCheckboxModule,
  MatPaginatorModule
];

/**
 * Material module
 */
@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules],
  providers: [

    {
      provide: MAT_DATE_LOCALE,
      useValue: 'es-CO'
    },
  ]
})
export class MaterialModule { }
