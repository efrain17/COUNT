import { Component, OnInit, ViewChild} from '@angular/core';
import { MdSidenav } from '@angular/material';
import { CoreService } from './core.service';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html'
})

export class CoreComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MdSidenav;

  constructor(private coreService: CoreService) { }

  ngOnInit() {
    this.coreService.setSidenav(this.sidenav);
  }

  open() {
    this.sidenav.open();
  }

}
