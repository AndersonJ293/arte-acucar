import { Component, OnInit } from '@angular/core';
import { faAdd, faFilePdf } from '@fortawesome/free-solid-svg-icons';
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
  faPrinter = faFilePdf;
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

  printBudget(budgetId: string) {
    this.router.navigate([]).then((result) => {
      window.open(`/orcamento/impressao/${budgetId}`, '_blank');
    });
  }
}
