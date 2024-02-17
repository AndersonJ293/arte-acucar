import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-graph-selector',
  templateUrl: './graph-selector.component.html',
  styleUrl: './graph-selector.component.scss',
})
export class GraphSelectorComponent {
  @Output() graphTypeChanged = new EventEmitter<string>();
  selectedValue: string = 'semanal';

  onChange() {
    this.graphTypeChanged.emit(this.selectedValue);
  }
}
