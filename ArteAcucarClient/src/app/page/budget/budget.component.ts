import { Component } from '@angular/core';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrl: './budget.component.scss',
})
export class BudgetComponent {
  faAdd = faAdd;

  get menuOpen() {
    return MenuService.menuOpen;
  }
}
