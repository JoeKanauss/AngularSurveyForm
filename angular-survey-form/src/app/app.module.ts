import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SelectModule} from 'angular2-select';

import { AppComponent } from './app.component';
import { OptionSelectComponent } from './option-select/option-select.component';



@NgModule({
  declarations: [
    AppComponent,
    OptionSelectComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
