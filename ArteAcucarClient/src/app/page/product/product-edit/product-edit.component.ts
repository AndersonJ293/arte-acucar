import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../../services/firebase.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.scss',
})
export class ProductEditComponent implements OnInit {
  previewUrl: string = '';
  open: boolean = false;
  items: any[] = [];
  selectedItems: any[] = [];

  nome: string = '';
  quantidade: number = 0;
  adicional: number = 0;
  porcentagemLucro: number = 0;
  horasTrabalhadas: string = this.getHorasTrabalhadas();

  config = JSON.parse(localStorage.getItem('config')!);

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit(): void {
    this.firebaseService.getCollectionWithIds('pricings').subscribe((data) => {
      this.items = data;
    });
  }

  openModal() {
    this.open = true;
  }

  handleSave(selectedItems: any[]) {
    this.selectedItems = selectedItems;
    this.closeModal();
  }

  onDrop(event: any): void {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    this.handleFile(file);
  }

  onDragOver(event: any): void {
    event.preventDefault();
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    this.handleFile(file);
  }

  handleFile(file: any): void {
    const reader = new FileReader();

    reader.onload = async (e: any) => {
      this.previewUrl = e.target.result;
    };

    reader.readAsDataURL(file);
  }

  closeModal() {
    this.open = false;
  }

  getHorasTrabalhadas(): string {
    const date = new Date();
    return `${date.getHours()}:${date.getMinutes()}`;
  }

  get custoProdutos() {
    return this.selectedItems.reduce(
      (acc, item) =>
        acc + item.usedQuantity * (item.data.precoTotal / item.data.quantidade),
      0
    );
  }

  get lucro() {
    return this.custoProdutos * (this.porcentagemLucro / 100);
  }

  get custoTotal() {
    return this.custoProdutos + (this.custoProdutos * this.adicional) / 100;
  }

  get salario() {
    const [horas, minutos] = this.horasTrabalhadas.split(':');
    const totalHoras = parseInt(horas) + parseInt(minutos) / 60;
    return totalHoras * parseFloat(this.config.data.salarioHora);
  }

  get precoTotal() {
    return this.custoTotal + this.lucro + this.salario;
  }
}
