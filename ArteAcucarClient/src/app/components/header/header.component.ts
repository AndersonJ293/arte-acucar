import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { MenuService } from '../../services/menu.service';
import { DisplayComponent } from '../../page/display/display.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  faBars = faBars;
  companyName: string = DisplayComponent.config.data.name;

  constructor(private menuService: MenuService) {}

  handleMenu = this.menuService.handleMenu;

  get companyLogo() {
    return DisplayComponent.config.data.logo;
  }
}
