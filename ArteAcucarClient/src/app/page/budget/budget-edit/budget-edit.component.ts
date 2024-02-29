import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FirebaseService } from '../../../services/firebase.service';
import { DisplayComponent } from '../../display/display.component';

@Component({
  selector: 'app-budget-edit',
  templateUrl: './budget-edit.component.html',
  styleUrl: './budget-edit.component.scss',
})
export class BudgetEditComponent implements OnInit {
  previewUrl: string = '';
  open: boolean = false;
  items: any[] = [];
  selectedItems: any[] = [];
  temEndereco: boolean = false;
  endereco: any = {};

  nome: string = '';
  _dataEntrega?: Date;
  _dataOrcamento: Date = new Date();
  tema: string = '';
  telefone: string = '';
  nomeCrianca: string = '';
  idadeCrianca: string = '';
  anotacoes: string = '';
  porcentagemAdicional: number = 0;
  cep: string = '';
  rua: string = '';
  bairro: string = '';
  numero: string = '';
  cidade: string = '';
  estado: string = '';

  budgetId: string = '';

  constructor(
    private firebaseService: FirebaseService,
    private route: ActivatedRoute,
    private toastService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.route.snapshot.url.some((segment) => segment.path === 'editar')) {
      this.budgetId = this.route.snapshot.paramMap.get('id')!;

      this.firebaseService
        .getDocumentById('budgets', this.budgetId)
        .subscribe((data) => {
          this.nome = data.data.nome;
          this.dataEntrega = data.data.dataEntrega;
          this.dataOrcamento = data.data.dataOrcamento;
          this.tema = data.data.tema;
          this.telefone = data.data.telefone;
          this.nomeCrianca = data.data.nomeCrianca;
          this.idadeCrianca = data.data.idadeCrianca;
          this.anotacoes = data.data.anotacoes;
          this.porcentagemAdicional = data.data.porcentagemAdicional;
          this.selectedItems = data.data.items;
          this.endereco = data.data.endereco;
        });
    }

    this.firebaseService.getCollectionWithIds('products').subscribe((data) => {
      this.items = data;
    });
  }

  get config() {
    return DisplayComponent.config.data;
  }

  get dataEntrega(): any {
    return this._dataEntrega ?? '';
  }

  get dataOrcamento(): Date {
    return this._dataOrcamento;
  }

  set dataEntrega(value: any) {
    this._dataEntrega =
      typeof value !== 'string' ? value.toDate() : new Date(value);
  }

  set dataOrcamento(value: any) {
    this._dataOrcamento =
      typeof value !== 'string' ? value.toDate() : new Date(value);
  }

  openModal() {
    this.open = true;
  }

  handleSave(selectedItems: any[]) {
    this.selectedItems = selectedItems;
    this.closeModal();
  }

  handleClose() {
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

  get horasTrabalhadasProdutos(): string {
    let minutosPrecificacoes: number = 0;
    let horasPrecificacoes: number = 0;

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

    return `${horasPrecificacoes}:${minutosPrecificacoes}`;
  }

  get custoProdutos(): number {
    return this.selectedItems.reduce(
      (acc, item) => acc + item.data.custoTotal * item.usedQuantity,
      0
    );
  }

  get lucro() {
    return this.selectedItems.reduce(
      (acc, item) => acc + item.data.lucro * item.usedQuantity,
      0
    );
  }

  get precoTotalProduos() {
    return this.selectedItems.reduce(
      (acc, item) => acc + item.data.precoTotal * item.usedQuantity,
      0
    );
  }

  get adicionalOrcamento(): number {
    return this.precoTotalProduos * (this.porcentagemAdicional / 100);
  }

  get salario(): number {
    const [horas, minutos] = this.horasTrabalhadasProdutos.split(':');
    const totalHoras = parseInt(horas) + parseInt(minutos) / 60;
    return totalHoras * parseFloat(this.config.salarioHora);
  }

  get precoTotal(): number {
    return this.precoTotalProduos + this.adicionalOrcamento;
  }

  saveBudget() {
    const fileInput = document.getElementById('imagem') as HTMLInputElement;
    const file = fileInput?.files?.[0];

    if (this.temEndereco)
      this.endereco = {
        cep: this.cep,
        rua: this.rua,
        bairro: this.bairro,
        numero: this.numero,
        estado: this.estado,
        cidade: this.cidade,
      };

    const data = {
      collection: 'budgets',
      path: 'budgets',
      firestoreData: {
        nome: this.nome,
        dataEntrega: this.dataEntrega,
        dataOrcamento: this.dataOrcamento,
        tema: this.tema,
        telefone: this.telefone,
        nomeCrianca: this.nomeCrianca,
        idadeCrianca: this.idadeCrianca,
        anotacoes: this.anotacoes,
        porcentagemAdicional: this.porcentagemAdicional,
        horasTrabalhadas: this.horasTrabalhadasProdutos,
        custoProdutos: parseFloat(this.custoProdutos.toFixed(2)),
        lucro: parseFloat(this.lucro.toFixed(2)),
        adicionalOrcamento: parseFloat(this.adicionalOrcamento.toFixed(2)),
        salario: parseFloat(this.salario.toFixed(2)),
        precoTotal: parseFloat(this.precoTotal.toFixed(2)),
        items: this.selectedItems,
        endereco: this.endereco,
      },
    };

    if (this.budgetId !== '') {
      try {
        this.firebaseService.editarItem(
          data.collection,
          this.budgetId,
          data.firestoreData
        );
        this.toastService.success('Orçamento editado com sucesso!', 'Sucesso');
        this.router.navigate(['/painel/orcamento']);
      } catch (error) {
        this.toastService.error('Erro ao editar o orçamento', 'Erro');
      }
      return;
    }

    try {
      this.firebaseService.postFirebaseFile(file, data);
      this.toastService.success('Orçamento salvo com sucesso!', 'Sucesso');
      this.router.navigate(['/painel/orcamento']);
    } catch (error) {
      this.toastService.error('Erro ao salvar orçamento', 'Erro');
    }
  }
}
