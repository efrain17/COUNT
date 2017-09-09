import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MdSidenav } from '@angular/material';
import { CoreService } from '../core.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() toggleSidebarEvent: EventEmitter<any> = new EventEmitter();
  public sidenav: MdSidenav;

  constructor(private coreService: CoreService) { 
  	
  }

  ngOnInit() {
  	console.log('hola');
  }
  
  toggleSidebar(): void {
  	console.log('emitie');
    this.coreService.open();
    //this.toggleSidebarEvent.emit();
  }

}
