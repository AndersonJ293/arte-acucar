import { Component } from '@angular/core';

interface Card {
  label: string;
  value: string;
}

@Component({
  selector: 'app-text-budget',
  templateUrl: './text-budget.component.html',
  styleUrl: './text-budget.component.scss',
})
export class TextBudgetComponent {
  texto: string = '';
  cards: Card[] = [
    { label: 'Nome do orçamento', value: 'this.orcamento' },
    { label: 'Nome da criança', value: 'this.nomeCrianca' },
    { label: 'Tema do orçamento', value: 'this.total' },
    { label: 'Idade da criança', value: 'this.idade' },
    { label: 'Data do orçamento', value: 'this.data' },
    { label: 'Itens do orçamento', value: 'this.itens' },
    { label: 'Valor total de itens', value: 'this.total' },
  ];
  draggedTexts: Card[] = [];

  salvarTexto() {
    console.log('Texto salvo:', this.texto);
  }

  onDragStart(event: DragEvent, value: string) {
    event.dataTransfer!.setData('text/plain', `{{ ${value} }}`);
  }
}
