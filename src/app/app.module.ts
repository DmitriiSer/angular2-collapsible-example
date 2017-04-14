import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

//import { CollapsibleListModule } from 'angular2-collapsible';
import { CollapsibleListModule } from './components/angular2-collapsible/index';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    CollapsibleListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
