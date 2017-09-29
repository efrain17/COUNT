import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';

import { CoreComponent } from './core.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MdSidenavModule } from '@angular/material';
import { MdCardModule } from '@angular/material';
import { MdMenuModule } from '@angular/material';
import { MdIconModule } from '@angular/material';

import { ROUTES }       from './core.routes';
import { FooterComponent } from './footer/footer.component';
import { CoreService } from './core.service';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdSidenavModule,
    MdCardModule,
    MdMenuModule,
    MdIconModule,
    ROUTES
  ],
  declarations: [
    CoreComponent, 
    NavbarComponent, 
    SidebarComponent, 
    FooterComponent
  ],
  providers: [ CoreService ]
})
export class CoreModule { }
