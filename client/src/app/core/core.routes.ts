import { Routes, RouterModule }  from '@angular/router';
import { CoreComponent } from './core.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  { path: '', component: CoreComponent, children: [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard',  loadChildren: '../dashboard/dashboard.module#DashboardModule'}
  ]}
];



export const ROUTES = RouterModule.forChild(routes);
