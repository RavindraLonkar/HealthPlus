import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddSupplierComponent} from './add-supplier/add-supplier.component';
import {SuppliersComponent} from './suppliers/suppliers.component';
import {SupplierDetailsComponent} from './supplier-details/supplier-details.component';
import {EditSupplierComponent} from './edit-supplier/edit-supplier.component';

const routes: Routes = [
  {path: 'add-supplier', component: AddSupplierComponent},
  {path: 'edit-supplier', component: EditSupplierComponent},
  {path: 'supplier-details', component: SupplierDetailsComponent},
  {path: 'suppliers', component: SuppliersComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierRoutingModule { }
