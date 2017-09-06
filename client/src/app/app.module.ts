import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule }      from '@angular/common';
import {RouterModule,Routes} from '@angular/router'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'app', pathMatch: 'full'}, 
  { path: 'app',   loadChildren: './core/core.module#CoreModule'},
  { path: 'error', component: ErrorComponent}, 
  { path: '**',    component: ErrorComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
