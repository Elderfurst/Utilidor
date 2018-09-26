import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavTabsComponent } from './nav-tabs/nav-tabs.component';
import { CurrentComponent } from './current/current.component';
import { HttpModule } from '@angular/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const routes: Routes = [
  {
    path: '',
    component: NavTabsComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavTabsComponent,
    CurrentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule,
    NavBarComponent,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
