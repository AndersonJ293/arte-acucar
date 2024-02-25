import { Component, OnInit } from '@angular/core';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { MenuService } from '../../services/menu.service';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrl: './budget.component.scss',
})
export class BudgetComponent implements OnInit {
  faAdd = faAdd;
  budgets: any[] = [];

  constructor(
    private firebaseService: FirebaseService,
    private router: Router
  ) {}

  get menuOpen() {
    return MenuService.menuOpen;
  }

  ngOnInit(): void {
    this.firebaseService
      .getCollectionWithIds('budgets')

      .subscribe((data) => {
        this.budgets = data;
      });
  }

  editBudget(budgetId: string) {
    this.router.navigate(['painel/orcamento/editar', budgetId]);
  }
}
