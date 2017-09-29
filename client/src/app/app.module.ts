import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule }      from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';

import {
  MdButtonModule,
  MdCoreModule,
  MdExpansionModule,
  MdNativeDateModule,
  MdRippleModule,
  MdSidenavModule,
  MdMenuModule,
  MdIconModule
} from '@angular/material';
@NgModule({
  exports: [
    MdButtonModule,
    MdCoreModule,
    MdExpansionModule,
    MdNativeDateModule,
    MdSidenavModule,
    MdMenuModule,
    MdIconModule
  ]
})
export class PlunkerMaterialModule {}

export const ROUTES: Routes = [
  { path: '', redirectTo: 'app', pathMatch: 'full'}, 
  { path: 'app',   loadChildren: './core/core.module#CoreModule'}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    CommonModule,
    PlunkerMaterialModule,
    MdNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
