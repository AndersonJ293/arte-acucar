import { Component } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.scss',
})
export class SidebarMenuComponent {
  listaMenuItens = [
    { nome: 'DashBoard', link: '/painel', icone: faHome },
    { nome: 'Precificação', link: '/painel/precificacao', icone: faMoneyBill },
    { nome: 'Orçamento', link: '/painel/orcamento', icone: faMoneyBill },
  ];
}
