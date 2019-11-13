import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  template: `<div class="sidebar"><div class="button logout__btn" (click)="navLogout()"><span>Выйти</span></div></div>`,
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {}

  navLogout() {
    this.router.navigateByUrl('/logout');
  }
}
