import { Component } from '@angular/core';

@Component({
  selector: 'app-budget-edit',
  templateUrl: './budget-edit.component.html',
  styleUrl: './budget-edit.component.scss',
})
export class BudgetEditComponent {
  open: boolean = false;
  selectedItems: any[] = [];

  items = [
    {
      id: 1,
      name: 'Produto 1',
      custo: '10',
      lucro: 25,
      venda: 40,
      quantidade: 0,
    },
    {
      id: 2,
      name: 'Produto 2',
      custo: '15',
      lucro: 30,
      venda: 45,
      quantidade: 0,
    },
    {
      id: 3,
      name: 'Produto 3',
      custo: '20',
      lucro: 35,
      venda: 50,
      quantidade: 0,
    },
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
