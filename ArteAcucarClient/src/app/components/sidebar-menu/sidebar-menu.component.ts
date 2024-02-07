import { Component } from '@angular/core';
import {
  faBarChart,
  faMoneyBill,
  faFileText,
  faShoppingBag,
  faSignOut,
  faGear,
  faBox,
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
    { nome: 'DashBoard', link: '/painel', icone: faBarChart },
    { nome: 'Orçamento', link: '/painel/orcamento', icone: faFileText },
    { nome: 'Produto', link: '/painel/', icone: faShoppingBag },
    { nome: 'Precificação', link: '/painel/precificacao', icone: faMoneyBill },
    { nome: 'Insumos', link: '/painel/insumos', icone: faBox },
  ];

  constructor(private menuService: MenuService) {}

  get menuOpen(): boolean {
    return MenuService.menuOpen;
  }

  closeMenu = this.menuService.closeMenu;
}
