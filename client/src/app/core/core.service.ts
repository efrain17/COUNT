import { Injectable } from '@angular/core';
import { MdSidenav } from '@angular/material';

@Injectable()
export class CoreService {
  private sidenav: MdSidenav;
  
  constructor() { }

  public setSidenav(sidenav: MdSidenav) {
    this.sidenav = sidenav;
  }

  public open() {
    return this.sidenav.open();
  }

  public close() {
    return this.sidenav.close();
  }

}
