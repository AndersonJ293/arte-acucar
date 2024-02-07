import { Component } from '@angular/core';
import {
  faHome,
  faMoneyBill,
  faSignOut,
  faGear,
} from '@fortawesome/free-solid-svg-icons';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.scss',
})
export class SidebarMenuComponent {
  faSignOut = faSignOut;
  faGear = faGear;
  listaMenuItens = [
    { nome: 'DashBoard', link: '/painel', icone: faHome },
    { nome: 'Precificação', link: '/painel/precificacao', icone: faMoneyBill },
    { nome: 'Orçamento', link: '/painel/orcamento', icone: faMoneyBill },
  ];

  constructor(private menuService: MenuService) {}

  get menuOpen(): boolean {
    return MenuService.menuOpen;
  }

  handleMenu = this.menuService.handleMenu;
}
