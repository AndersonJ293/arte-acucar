import { Component } from '@angular/core';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  faAdd = faAdd;

  get menuOpen() {
    return MenuService.menuOpen;
  }
}
