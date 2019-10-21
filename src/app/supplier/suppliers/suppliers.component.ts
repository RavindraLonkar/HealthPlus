import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {SupplierService} from '../supplier.service';
import {first} from 'rxjs/operators';

export interface SupplierData {
  companyName: number;
  phoneNumber: number;
  emailId: string;
  status: boolean;
}

const SUPPLIER_DATA: SupplierData[] = [];

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.sass']
})
export class SuppliersComponent implements OnInit {

  displayedColumns: string[] = ['Supplier Name', 'Phone Number', 'Email ID', 'Status'];
  dataSource: MatTableDataSource<SupplierData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private supplierService: SupplierService) {
    this.dataSource = new MatTableDataSource(SUPPLIER_DATA);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    /*this.getAllSuppliers();*/
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  public getAllSuppliers(advisorId) {
   /* this.supplierService.getAllclients(advisorId)
      .pipe(first())
      .subscribe(data => {
        if (data.status === 'Success') {
          this.dataSource.data = data.responseListObject as SupplierData[];
        }
      });*/
  }

  downloadFile(documentId) {
    /*this.supplierService.downloadFile(documentId);*/
  }

}
