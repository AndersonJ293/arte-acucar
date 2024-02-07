import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { MenuService } from '../../services/menu.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  faBars = faBars;

  constructor(private menuService: MenuService) {}

  handleMenu = this.menuService.handleMenu;
}
