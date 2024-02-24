import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../../services/firebase.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DisplayComponent } from '../../display/display.component';

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
  porcentagemAdicional: number = 0;
  _horasTrabalhadas: string = '00:00';
  _horasTrabalhadasInput: string = '00:00';

  productId: string = '';

  get config() {
    return DisplayComponent.config;
  }

  constructor(
    private firebaseService: FirebaseService,
    private route: ActivatedRoute,
    private toastService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.route.snapshot.url.some((segment) => segment.path === 'editar')) {
      this.productId = this.route.snapshot.paramMap.get('id')!;

      this.firebaseService
        .getDocumentById('products', this.productId)
        .subscribe((data) => {
          this.nome = data.data.nome;
          this.porcentagemAdicional = data.data.porcentagemAdicional;
          this.selectedItems = data.data.items;
          this.previewUrl = data.data.urlImage;
        });
    }

    this.firebaseService.getCollectionWithIds('pricings').subscribe((data) => {
      this.items = data;
    });
  }

  openModal() {
    this.open = true;
  }

  handleSave(selectedItems: any[]) {
    console.log(selectedItems);

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

  get horasTrabalhadas(): string {
    let minutosPrecificacoes: number = 0;
    let horasPrecificacoes: number = 0;

    let [horasPrecificacoesInput, minutosPrecificacoesInput] =
      this._horasTrabalhadasInput.split(':');

    if (this.selectedItems.length > 0) {
      this.selectedItems.map((item) => {
        if (item.usedQuantity > 0) {
          const [horas, minutos] = item.data.horasTrabalhadas.split(':');
          minutosPrecificacoes += parseInt(horas) * 60 + parseInt(minutos);
        }
      });
    }

    horasPrecificacoes = Math.floor(minutosPrecificacoes / 60);
    minutosPrecificacoes = minutosPrecificacoes % 60;

    this._horasTrabalhadas = `${horasPrecificacoes
      .toString()
      .padStart(2, '0')}:${minutosPrecificacoes.toString().padStart(2, '0')}`;

    return this._horasTrabalhadas;
  }

  set horasTrabalhadas(value: string) {
    this._horasTrabalhadasInput = value;
  }

  get custoPrecificacoes() {
    return this.selectedItems.reduce(
      (acc, item) =>
        acc +
        item.usedQuantity * (item.data.custoInsumos / item.data.quantidade),
      0
    );
  }

  get lucro() {
    return this.selectedItems.reduce(
      (acc, item) =>
        acc + item.data.lucro * (item.usedQuantity / item.data.quantidade),
      0
    );
  }

  get custoTotal() {
    return this.custoPrecificacoes + this.adicionalPrecificacao;
  }

  get adicionalProduto() {
    return this.custoPrecificacoes * (this.porcentagemAdicional / 100);
  }

  get adicionalPrecificacao() {
    return this.selectedItems.reduce(
      (acc, item) =>
        acc + item.data.adicional * (item.usedQuantity / item.data.quantidade),
      0
    );
  }

  get salario() {
    const [horas, minutos] = this.horasTrabalhadas.split(':');
    const totalHoras = parseInt(horas) + parseInt(minutos) / 60;
    return totalHoras * parseFloat(this.config.salarioHora);
  }

  get precoTotal() {
    return this.custoTotal + this.lucro + this.salario + this.adicionalProduto;
  }

  saveProduct() {
    const fileInput = document.getElementById('imagem') as HTMLInputElement;
    const file = fileInput?.files?.[0];

    const data = {
      collection: 'products',
      path: 'products',
      firestoreData: {
        nome: this.nome,
        porcentagemAdicional: this.porcentagemAdicional,
        horasTrabalhadas: this.horasTrabalhadas,
        custoTotal: this.custoTotal,
        lucro: parseFloat(this.lucro.toFixed(2)),
        adicionalPrecificacao: parseFloat(
          this.adicionalPrecificacao.toFixed(2)
        ),
        adicionalProduto: parseFloat(this.adicionalProduto.toFixed(2)),
        salario: parseFloat(this.salario.toFixed(2)),
        precoTotal: parseFloat(this.precoTotal.toFixed(2)),
        custoPrecificacoes: this.custoPrecificacoes,
        items: this.selectedItems,
      },
    };

    if (this.productId !== '') {
      try {
        this.firebaseService.editarItem(
          data.collection,
          this.productId,
          data.firestoreData
        );
        this.toastService.success('Produto editado com sucesso!', 'Sucesso');
        this.router.navigate(['/painel/produto']);
      } catch (error) {
        this.toastService.error('Erro ao editar o produto', 'Erro');
      }
      return;
    }

    try {
      this.firebaseService.postFirebaseFile(file, data);
      this.toastService.success('Precificação salva com sucesso!', 'Sucesso');
      this.router.navigate(['/painel/produto']);
    } catch (error) {
      this.toastService.error('Erro ao salvar precificação', 'Erro');
    }
  }
}
