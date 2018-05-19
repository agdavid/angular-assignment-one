import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WarningAlert } from '../warning_alert/warning_alert.component';
import { SuccessAlert } from '../success_alert/success_alert.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningAlert,
    SuccessAlert
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
