import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavTabsComponent } from './nav-tabs/nav-tabs.component';
import { CurrentComponent } from './current/current.component';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    NavTabsComponent,
    CurrentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
