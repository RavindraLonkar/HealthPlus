import {Component} from '@angular/core';
import {Token} from './models/Token';
import {Router} from '@angular/router';
import {AuthenticationService} from './auth/_services';
import {NgxUiLoaderConfig, NgxUiLoaderService} from 'ngx-ui-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  token: Token;
  config: NgxUiLoaderConfig;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private ngxUiLoaderService: NgxUiLoaderService
  ) {
    /*this.authenticationService.token.subscribe(x => this.token = x);*/
    this.config = ngxUiLoaderService.getDefaultConfig();
  }
}
