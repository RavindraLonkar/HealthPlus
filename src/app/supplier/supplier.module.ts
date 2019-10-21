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
  MAT_DIALOG_DATA, MatAutocompleteModule, MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatDialogRef,
  MatFormFieldModule, MatIconModule, MatInputModule, MatPaginatorModule, MatRadioModule, MatSelectModule, MatTableModule, MatTabsModule
} from '@angular/material';
import {AuthenticationService} from '../auth/_services';
import {ImageCropperService} from '../utility/components/image-cropper-dialog/image-cropper-service';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialFileInputModule} from 'ngx-material-file-input';
import {UtilityModule} from '../utility/utility.module';

@NgModule({
  declarations: [AddSupplierComponent, EditSupplierComponent, SuppliersComponent, SupplierDetailsComponent],
  imports: [
    CommonModule,
    SupplierRoutingModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatCardModule,
    MatDialogModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatIconModule,
    MatTabsModule,
    MatButtonModule,
    MatRadioModule,
    MaterialFileInputModule,
    UtilityModule,
    MatTableModule,
    MatPaginatorModule
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
