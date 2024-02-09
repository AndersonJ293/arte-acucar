import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-budget-modal',
  templateUrl: './budget-modal.component.html',
  styleUrl: './budget-modal.component.scss',
})
export class BudgetModalComponent {
  @Input() items: any[] = [];
  @Input() selectedItems: any[] = [];
  @Output() save: EventEmitter<any[]> = new EventEmitter<any[]>();

  searchInput: string = '';

  toggleSelection(item: any) {
    item.selected = !item.selected;

    if (item.selected) {
      this.selectedItems.push(item);
      return;
    }

    const index = this.selectedItems.findIndex((sItem) => sItem.id === item.id);
    if (index !== -1) this.selectedItems.splice(index, 1);
  }

  saveSelection() {
    this.save.emit(this.selectedItems);
  }
}
