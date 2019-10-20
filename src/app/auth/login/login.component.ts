import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';

import {AuthenticationService} from '../_services/authentication.service';
import {UserService} from '../_services';
import { UserSessionData } from 'src/app/models/user-SeesionData';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  response: any[];
  //private userSessionData: UserSessionData

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private permissionsService: NgxPermissionsService,
  ) { }

  ngOnInit() {
    document.body.className = 'hold-transition login-page';

    window.sessionStorage.removeItem('token');
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    });

    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/home';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {

   /*this.authenticationService.loginUser(this.f.username.value, this.f.password.value)
    .pipe(first())
    .subscribe(data =>{
      debugger;
      if (data.status === 'Success'){
        //this.userSessionData.userId = data.responseObject.userId;
        //this.userSessionData.userName = data.responseObject.userName;
       // this.userSessionData.RoleList = data.responseObject.RoleList;
        //sessionStorage.setItem('sessionData', JSON.stringify(this.userSessionData));
        this.permissionsService.loadPermissions(data.responseObject.permissions);
        sessionStorage.setItem('advisorId', data.responseObject.advisorId);
        sessionStorage.setItem('userId', data.responseObject.userId);*/
        this.router.navigate(['home']);
     /* } else{
        this.error = data.reasonText;
      }

    });*/

    /*// stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe( token => {

        this.userService.getByUserName(this.f.username.value)
          .pipe(first())
          .subscribe(user => {
                if (user) {
                  localStorage.setItem('token', JSON.stringify(user));
                  this.router.navigate([this.returnUrl]);
                }
              },
            error => {
              this.error = error;
              this.loading = false;
            });
      },
      error => {
        this.error = error;
        this.loading = false;
    });*/
  }
}
