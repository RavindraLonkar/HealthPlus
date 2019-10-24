import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AddSupplierComponent} from '../supplier/add-supplier/add-supplier.component';
import {EditSupplierComponent} from '../supplier/edit-supplier/edit-supplier.component';
import {SupplierDetailsComponent} from '../supplier/supplier-details/supplier-details.component';
import {SuppliersComponent} from '../supplier/suppliers/suppliers.component';
import {AddMedicineCatgComponent} from '../medicine-catg/add-medicine-catg/add-medicine-catg.component';
import {MedicinesCatgComponent} from '../medicine-catg/medicines-catg/medicines-catg.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent/*, canActivate: [AuthGuard]*/},
  {
    path: 'home', component: HomeComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent/*, canActivate: [AuthGuard]*/},
      {path: 'add-supplier', component: AddSupplierComponent},
      {path: 'edit-supplier', component: EditSupplierComponent},
      {path: 'supplier-details', component: SupplierDetailsComponent},
      {path: 'suppliers', component: SuppliersComponent},
      {path : 'add-medicine-catg', component : AddMedicineCatgComponent},
      {path: 'medicines-catg', component: MedicinesCatgComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
