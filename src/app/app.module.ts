import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { appRouting } from "./app.Routing";
import {    LoginModule,} from './login/login.module';
import {    DashboardModule} from "./dashboard/dashboard.module";
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotfoundComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    DashboardModule,
    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
