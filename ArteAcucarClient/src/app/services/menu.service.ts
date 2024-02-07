import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  public static menuOpen: boolean = false;

  constructor() {}

  handleMenu() {
    MenuService.menuOpen = !MenuService.menuOpen;
    console.log(MenuService.menuOpen);
  }
}