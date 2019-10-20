import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeModule} from './home/home.module';
import {AuthModule} from './auth/auth.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {NgxPermissionsModule} from 'ngx-permissions';
import {
  NgxUiLoaderConfig,
  NgxUiLoaderHttpModule,
  NgxUiLoaderModule,
  NgxUiLoaderRouterModule,
  PB_DIRECTION,
  POSITION,
  SPINNER
} from 'ngx-ui-loader';
import {GlobalConfig, ToastrConfig, ToastrModule} from 'ngx-toastr';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: '#00ACC1',
  bgsOpacity: 0.5,
  bgsPosition: POSITION.bottomCenter,
  bgsSize: 60,
  bgsType: SPINNER.rotatingPlane,
  blur: 5,
  fgsColor: '#00ACC1',
  fgsPosition: POSITION.centerCenter,
  fgsSize: 60,
  fgsType: SPINNER.rotatingPlane,
  gap: 24,
  logoPosition: POSITION.centerCenter,
  logoSize: 120,
  logoUrl: '',
  overlayBorderRadius: '0',
  overlayColor: 'rgba(40, 40, 40, 0.8)',
  pbColor: '#00ACC1',
  pbDirection: PB_DIRECTION.leftToRight,
  pbThickness: 3,
  hasProgressBar: true,
  text: '',
  textColor: '#FFFFFF',
  textPosition: POSITION.centerCenter,
  threshold: 500
};

const toastrConfig: GlobalConfig = {
  maxOpened: 0,
  autoDismiss: false,
  newestOnTop: true,
  preventDuplicates: false,
  countDuplicates: false,
  resetTimeoutOnDuplicate: false,
  iconClasses: {
    error: 'toast-error',
    info: 'toast-info',
    success: 'toast-success',
    warning: 'toast-warning',
  },

  // Individual
  closeButton: false,
  disableTimeOut: false,
  timeOut: 5000,
  extendedTimeOut: 1000,
  enableHtml: false,
  progressBar: false,
  toastClass: 'ngx-toastr',
  positionClass: 'toast-bottom-left',
  titleClass: 'toast-title',
  messageClass: 'toast-message',
  easing: 'ease-in',
  easeTime: 300,
  tapToDismiss: true,
  onActivateTick: false,
  progressAnimation: 'decreasing',
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HomeModule,
    BrowserAnimationsModule,
    NgxPermissionsModule.forRoot(),
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderRouterModule, // import this module for showing loader automatically when navigating between app routes
    NgxUiLoaderHttpModule,
    ToastrModule.forRoot(toastrConfig)
  ],
  /*providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],*/
  providers: [
    { provide: STEPPER_GLOBAL_OPTIONS, useValue: { showError: true }}
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
