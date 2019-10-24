import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home/home.component';
import {LayoutModule} from '../layout/layout.module';
import {NgxPermissionsModule} from 'ngx-permissions';
import { DashboardComponent } from './dashboard/dashboard.component';
import {SupplierModule} from '../supplier/supplier.module';
import {MedicineCatgModule} from '../medicine-catg/medicine-catg.module';


@NgModule({
  declarations: [HomeComponent, DashboardComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LayoutModule,
    SupplierModule,
    MedicineCatgModule,
    NgxPermissionsModule.forRoot()
  ]
})
export class HomeModule { }
