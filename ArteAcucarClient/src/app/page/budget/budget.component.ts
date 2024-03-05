import { Component, OnInit } from '@angular/core';
import { faAdd, faDownload } from '@fortawesome/free-solid-svg-icons';
import { MenuService } from '../../services/menu.service';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';
import { DisplayComponent } from '../display/display.component';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrl: './budget.component.scss',
})
export class BudgetComponent implements OnInit {
  faAdd = faAdd;
  faDownload = faDownload;
  budgets: any[] = [];
  companyName: string = DisplayComponent.config.data.name;

  constructor(
    private firebaseService: FirebaseService,
    private router: Router
  ) {}

  get menuOpen() {
    return MenuService.menuOpen;
  }

  get companyLogo() {
    return DisplayComponent.config.data.logo;
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
