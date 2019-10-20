import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TopnavbarComponent} from './topnavbar/topnavbar.component';
import {AsidenavbarComponent} from './asidenavbar/asidenavbar.component';
import {FooternavbarComponent} from './footernavbar/footernavbar.component';
import {SettingsnavbarComponent} from './settingsnavbar/settingsnavbar.component';
import {LayoutRoutingModule} from './layout-routing.module';
import {NgxPermissionsModule} from 'ngx-permissions';

@NgModule({
  declarations: [TopnavbarComponent, AsidenavbarComponent, FooternavbarComponent, SettingsnavbarComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NgxPermissionsModule.forChild()
  ],

  exports : [
    TopnavbarComponent, AsidenavbarComponent, FooternavbarComponent, SettingsnavbarComponent
  ]
})
export class LayoutModule { }
