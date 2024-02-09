import { Component, ElementRef, ViewChild } from '@angular/core';
import { PricingModalComponent } from '../pricing-modal/pricing-modal.component';

@Component({
  selector: 'app-pricing-edit',
  templateUrl: './pricing-edit.component.html',
  styleUrl: './pricing-edit.component.scss',
})
export class PricingEditComponent {
  open: boolean = false;
  selectedItems: any[] = [];

  items = [
    { id: 1, name: 'Insumo 1', brand: 'Marca 1', value: 10, quantity: 1 },
    { id: 2, name: 'Insumo 2', brand: 'Marca 2', value: 15, quantity: 1 },
    { id: 3, name: 'Insumo 3', brand: 'Marca 3', value: 20, quantity: 1 },
  ];

  openModal() {
    this.open = true;
  }

  handleSave(selectedItems: any[]) {
    this.selectedItems = selectedItems;
    this.closeModal();
  }

  closeModal() {
    this.open = false;
  }
}
