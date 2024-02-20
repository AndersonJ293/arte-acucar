import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-goal-selector',
  templateUrl: './goal-selector.component.html',
  styleUrl: './goal-selector.component.scss',
})
export class GoalSelectorComponent {
  @Output() goalChanged = new EventEmitter<string>();
  selectedValue: string = 'venda';

  onChange() {
    this.goalChanged.emit(this.selectedValue);
  }
}
