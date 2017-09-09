import { Component, OnInit, ViewChild} from '@angular/core';
import { MdSidenav } from '@angular/material';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html'
})
export class CoreComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

  open(sidenav) {
  	sidenav.open();
  }

}
