import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../auth/_services';
import {HttpClient} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import {ImageCropperService} from '../../utility/components/image-cropper-dialog/image-cropper-service';
import {WsUtilityService} from '../../utility/ws-utility.service';
import {SupplierService} from '../supplier.service';

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.scss']
})
export class AddSupplierComponent implements OnInit {

  private addSupplierForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private supplierService: SupplierService,
    private authservice: AuthenticationService,
    private http: HttpClient,
    private cd: ChangeDetectorRef,
    private cropperModel: ImageCropperService,
    private toastr: ToastrService,
    private wsUtility: WsUtilityService
  ) {
    this.addSupplierForm = this.fb.group({
      companyName: ['', [Validators.required]],
      emailId: ['', [Validators.required, Validators.pattern('^[A-Za-z]{5}\\d{4}[A-Za-z]{1}$')]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[A-Za-z]{5}\\d{4}[A-Za-z]{1}$')]],
      active: ['', [Validators.required]]
    });
  }

  private validationMessages = {
    companyName: {required: 'Company name is required'},
    emailId: {required: 'Email Id is required', pattern: 'Please Enter valid email id number'},
    phoneNumber: {required: 'Phone number is required', pattern: 'Please enter valid phone number'},
    active: {required: 'Status is required'},
  }

  private formErrors = {
    companyName: '',
    emailId: '',
    phoneNumber: '',
    active: '',
  }

  ngOnInit() {
  }

  private validate() {
    this.wsUtility.logValidationErrors(this.addSupplierForm, this.validationMessages, this.formErrors);
  }

}
