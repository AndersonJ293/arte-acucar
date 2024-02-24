import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pricing-modal',
  templateUrl: './pricing-modal.component.html',
  styleUrl: './pricing-modal.component.scss',
})
export class PricingModalComponent implements OnInit {
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

  ngOnInit(): void {
    this.selectedItems.map((sItem) => {
      const index = this.items.findIndex((item) => item.id === sItem.id);
      if (index !== -1) this.items[index].selected = true;
    });
  }

  saveSelection() {
    this.save.emit(this.selectedItems);
  }
}
