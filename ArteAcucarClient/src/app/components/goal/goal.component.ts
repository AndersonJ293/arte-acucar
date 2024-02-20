import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrl: './goal.component.scss',
})
export class GoalComponent implements OnChanges {
  goal: number = 52;
  current: number = 45;
  percentege: number = 0;
  goalType: string = 'venda';

  onGraphTypeChanged(graphType: string) {
    this.goalType = graphType;
  }

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    this.getPercentage();
  }

  ngOnInit(): void {
    this.getPercentage();
  }

  getPercentage() {
    this.percentege = (this.current / this.goal) * 100;
  }

  modifyGoal(): void {}

  get formatSubtitle (): string  {
    if (this.percentege >= 100) {
      return 'Parabéns, você atingiu sua meta!';
    } else if (this.percentege >= 75) {
      return 'Continue se esforçando, você está quase lá!';
    } else if (this.percentege >= 50) {
      return 'Você ja chegou na metade da sua meta, vamos lá!';
    } else if (this.percentege >= 25) {
      return 'Um bom inicio vamos com tudo!';
    } else if (this.percentege >= 0) {
      return 'O seu mês so ta começando vamos lá!';
    } else {
      return 'Não configurado';
    }
  };
}
