import { Component } from '@angular/core';

@Component({
  selector: 'app-all-info',
  templateUrl: './all-info.component.html',
  styleUrl: './all-info.component.scss',
})
export class AllInfoComponent {
  weekProfit: number = 30;
  weekSalary: number = 80;
  weekCosts: number = 150;
  weekAdditional: number = 50;

  monthProfit: number = 1000;
  monthSalary: number = 3000;
  monthCosts: number = 1500;
  monthAdditional: number = 500;
}
