import { Component, OnInit, ViewChild} from '@angular/core';
import { MdSidenavModule } from '@angular/material';
import { MdSidenav } from '@angular/material';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MdSidenav;
  constructor() { }

  ngOnInit() {
  }

  open() {
    console.log('emitiendo2');
    this.sidenav.open();
  }

}
