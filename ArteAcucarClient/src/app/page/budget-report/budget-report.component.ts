import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../../services/firebase.service';
import { DisplayComponent } from '../display/display.component';

@Component({
  selector: 'app-budget-report',
  templateUrl: './budget-report.component.html',
  styleUrl: './budget-report.component.scss',
})
export class BudgetReportComponent implements OnInit {
  budgetId: string = '';
  budget: any = {};
  carregado: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private firebaseService: FirebaseService
  ) {}

  // get config() {
  //   return DisplayComponent.config;
  // }

  ngOnInit(): void {
    this.budgetId = this.route.snapshot.paramMap.get('id')!;

    this.firebaseService
      .getDocumentById('budgets', this.budgetId)
      .subscribe((data) => {
        this.budget = data;
        this.carregado = true;
      });
  }
}
