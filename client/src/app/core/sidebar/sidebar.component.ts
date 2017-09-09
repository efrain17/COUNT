import { Component, OnInit, ViewChild} from '@angular/core';
import { MdSidenavModule } from '@angular/material';
import { MdSidenav } from '@angular/material';
import { CoreService } from '../core.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MdSidenav;
  
  constructor(private coreService: CoreService) { }

  ngOnInit() {
    this.coreService.setSidenav(this.sidenav);
  }

  open() {
    this.sidenav.open();
  }

}
