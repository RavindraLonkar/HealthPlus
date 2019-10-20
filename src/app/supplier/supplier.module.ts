import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SupplierRoutingModule} from './supplier-routing.module';
import {AddSupplierComponent} from './add-supplier/add-supplier.component';
import {EditSupplierComponent} from './edit-supplier/edit-supplier.component';
import {SuppliersComponent} from './suppliers/suppliers.component';
import {SupplierDetailsComponent} from './supplier-details/supplier-details.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MAT_CHECKBOX_CLICK_ACTION,
  MAT_DIALOG_DATA,
  MatCardModule,
  MatDialogModule,
  MatDialogRef,
  MatFormFieldModule, MatInputModule
} from '@angular/material';
import {AuthenticationService} from '../auth/_services';
import {ImageCropperService} from '../utility/components/image-cropper-dialog/image-cropper-service';

@NgModule({
  declarations: [AddSupplierComponent, EditSupplierComponent, SuppliersComponent, SupplierDetailsComponent],
  imports: [
    CommonModule,
    SupplierRoutingModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatDialogModule,
  ],

  providers: [
    AuthenticationService, ImageCropperService,
    {provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'check'},
    {provide: MatDialogRef, useValue: {}},
    {provide: MAT_DIALOG_DATA, useValue: {}},
  ],
})
export class SupplierModule {
}
