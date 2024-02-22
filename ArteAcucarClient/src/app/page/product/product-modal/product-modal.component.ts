import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrl: './product-modal.component.scss',
})
export class ProductModalComponent {
  @Input() items: any[] = [];
  @Input() selectedItems: any[] = [];
  @Output() save: EventEmitter<any[]> = new EventEmitter<any[]>();

  searchInput: string = '';

  toggleSelection(item: any) {
    item.selected = !item.selected;

    if (item.selected) {
      this.selectedItems.push({ ...item, usedQuantity: 0 });
      return;
    }

    const index = this.selectedItems.findIndex((sItem) => sItem.id === item.id);
    if (index !== -1) this.selectedItems.splice(index, 1);
  }

  saveSelection() {
    this.save.emit(this.selectedItems);
  }
}
