import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  isMenuExpanded = false;


  constructor(private router: Router) {}

  // selectMenuItem(key: MenuKeys) {
  //   this.selectedMenuItem = key;
  //   this.router.navigate([Menu[key].route]);
  // }

  toggleMenu() {
    this.isMenuExpanded = !this.isMenuExpanded;
  }

  // logout() {
  //   this.authService.SignOut();
  // }
}
