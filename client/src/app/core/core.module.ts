import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';

import { CoreComponent } from './core.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MdSidenavModule} from '@angular/material';

import { ROUTES }       from './core.routes';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdSidenavModule,
    ROUTES
  ],
  declarations: [CoreComponent, NavbarComponent, SidebarComponent, FooterComponent]
})
export class CoreModule { }
