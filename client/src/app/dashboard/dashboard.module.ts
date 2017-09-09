import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MdButtonModule } from '@angular/material';


import { RouterModule } from '@angular/router';

export const routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule { }
