import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faBox } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrl: './stock-list.component.scss',
})
export class StockListComponent {
  faBox = faBox;

  @Input() items: any[] = [];
  @Input() selectedItems: number[] = [];
  @Output() selectedItemsChange = new EventEmitter<number[]>();

  constructor() {}

  isSelected(itemId: number): boolean {
    return this.selectedItems.includes(itemId);
  }

  toggleSelection(itemId: number) {
    if (this.isSelected(itemId)) {
      this.selectedItems = this.selectedItems.filter((id) => id !== itemId);
    } else {
      this.selectedItems = [...this.selectedItems, itemId];
    }
    this.selectedItemsChange.emit(this.selectedItems);
  }
}
