import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.scss',
})
export class GraphComponent {
  @Input() graphType: string = 'semanal';
  graphData: any[] = [];
  graphLabels: string[] = [];
  graphOptions: any = {
    responsive: true,
  };
  graphLegend: boolean = true;

  semanalData: any[] = [{ data: [120, 150, 180, 200, 120], label: 'Semanal' }];

  mensalData: any[] = [
    { data: [500, 600, 700, 800, 900, 1000], label: 'Mensal' },
  ];

  anualData: any[] = [{ data: [5000, 6000, 7000], label: 'Anual' }];

  ngOnInit() {
    this.loadData();
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('graphType' in changes) {
      this.loadData();
    }
  }

  loadData() {
    if (this.graphType === 'semanal') {
      this.graphLabels = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex'];
      this.graphData = this.semanalData;
    } else if (this.graphType === 'mensal') {
      this.graphLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
      this.graphData = this.mensalData;
    } else if (this.graphType === 'anual') {
      this.graphLabels = ['2023', '2024', '2025'];
      this.graphData = this.anualData;
    }
  }
}
