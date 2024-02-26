import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../../services/firebase.service';
import html2canvas from 'html2canvas';

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

  @ViewChild('screen') screen?: ElementRef;
  @ViewChild('canvas') canvas?: ElementRef;
  @ViewChild('downloadLink') downloadLink?: ElementRef;

  downloadImage() {
    html2canvas(this.screen!.nativeElement).then((canvas) => {
      this.canvas!.nativeElement.src = canvas.toDataURL();
      this.downloadLink!.nativeElement.href = canvas.toDataURL('image/png');
      this.downloadLink!.nativeElement.download = `Orcamento${this.budget.data.nome}.png`;
      this.downloadLink!.nativeElement.click();
    });
  }
}
