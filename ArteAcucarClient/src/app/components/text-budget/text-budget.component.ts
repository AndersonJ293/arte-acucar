import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
  @Input() configForm: FormGroup = new FormGroup({});
  @Output() textChanged = new EventEmitter<string>();

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

  constructor(private formBuilder: FormBuilder) {}

  salvarTexto() {
    console.log(
      'Texto salvo:',
      this.configForm.get('mensagemOrcamento')!.value
    );
  }

  onChange() {
    this.textChanged.emit(this.configForm.get('mensagemOrcamento')!.value);
  }

  onDragStart(event: DragEvent, value: string) {
    event.dataTransfer!.setData('text/plain', `{{ ${value} }}`);
  }

  addCustomText() {
    if (this.texto.trim() !== '') {
      this.draggedTexts.push({
        label: this.texto,
        value: this.texto,
      });
      this.texto = '';
    }
  }
}
