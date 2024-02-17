import { Component } from '@angular/core';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrl: './analysis.component.scss',
})
export class AnalysisComponent {
  graphType: string = 'semanal';

  onGraphTypeChanged(graphType: string) {
    this.graphType = graphType;
  }
}
