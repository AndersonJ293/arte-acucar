import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FirebaseService } from '../../../services/firebase.service';

@Component({
  selector: 'app-pricing-edit',
  templateUrl: './pricing-edit.component.html',
  styleUrl: './pricing-edit.component.scss',
})
export class PricingEditComponent implements OnInit {
  open: boolean = false;
  items: any[] = [];
  selectedItems: any[] = [];

  nome: string = '';
  quantidade: number = 0;
  adicional: number = 0;
  porcentagemLucro: number = 0;
  horasTrabalhadas: string = '00:00';

  config = JSON.parse(localStorage.getItem('config')!);

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit(): void {
    this.firebaseService
      .getCollectionWithIds('commodities')
      .subscribe((data) => {
        this.items = data;
      });
  }

  get custoInsumos() {
    return this.selectedItems.reduce(
      (acc, item) =>
        acc + item.usedQuantity * (item.data.price / item.data.quantity),
      0
    );
  }

  get custoTotal() {
    return this.custoInsumos + (this.custoInsumos * this.adicional) / 100;
  }

  get lucro() {
    return this.custoInsumos * (this.porcentagemLucro / 100);
  }

  get salario() {
    const [horas, minutos] = this.horasTrabalhadas.split(':');
    const totalHoras = parseInt(horas) + parseInt(minutos) / 60;
    return totalHoras * parseFloat(this.config.data.salarioHora);
  }

  get precoTotal() {
    return this.custoTotal + this.lucro + this.salario;
  }

  savePricing() {
    const data = {
      collection: 'pricings',
      firestoreData: {
        nome: this.nome,
        quantidade: this.quantidade,
        adicional: this.adicional,
        porcentagemLucro: this.porcentagemLucro,
        horasTrabalhadas: this.horasTrabalhadas,
        custoInsumos: this.custoInsumos,
        custoTotal: this.custoTotal,
        lucro: parseFloat(this.lucro.toFixed(2)),
        salario: this.salario,
        precoTotal: this.precoTotal,
        items: this.selectedItems,
      },
    };

    this.firebaseService.postFirebase(data);
  }

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
