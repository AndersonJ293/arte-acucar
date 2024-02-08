import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pricing-modal',
  templateUrl: './pricing-modal.component.html',
  styleUrl: './pricing-modal.component.scss',
})
export class PricingModalComponent implements OnInit {
  @Input() items: any[] = [];
  @Output() save: EventEmitter<any[]> = new EventEmitter<any[]>();

  searchInput: string = '';

  constructor() {}

  ngOnInit(): void {}

  selectedItems: any[] = [];

  toggleSelection(item: any) {
    item.selected = !item.selected;
    if (item.selected) {
      this.selectedItems.push(item);
    } else {
      const index = this.selectedItems.findIndex(
        (selectedItem) => selectedItem.id === item.id
      );
      if (index !== -1) {
        this.selectedItems.splice(index, 1);
      }
    }
  }

  saveSelection() {
    this.save.emit(this.selectedItems);
  }

  closeModal() {
    const modal = document.querySelector('.modal');
    modal!.classList.remove('show');
  }
}
