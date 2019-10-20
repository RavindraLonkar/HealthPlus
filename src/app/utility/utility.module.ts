import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DatePickerComponent} from './components/date-picker/date-picker.component';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
  MatDatepickerModule,
  MatInputModule,
  MatPaginatorModule, MatSortModule,
  MatTableModule,
  MatCheckboxModule
} from '@angular/material';
import {DatePicker2Component} from './components/date-picker2/date-picker2.component';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {NgxDataTableComponent} from './components/ngx-data-table/ngx-data-table.component';

@NgModule({
  declarations: [DatePickerComponent, DatePicker2Component, NgxDataTableComponent],
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],

  exports: [DatePickerComponent, DatePicker2Component, NgxDataTableComponent],

  providers: [
    MatDatepickerModule,
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ]
})
export class UtilityModule { }
