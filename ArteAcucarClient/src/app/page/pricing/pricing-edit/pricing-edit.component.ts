import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FirebaseService } from '../../../services/firebase.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DisplayComponent } from '../../display/display.component';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pricing-edit',
  templateUrl: './pricing-edit.component.html',
  styleUrl: './pricing-edit.component.scss',
})
export class PricingEditComponent implements OnInit {
  open: boolean = false;
  items: any[] = [];
  selectedItems: any[] = [];
  enviando: boolean = false;
  faSpinner = faSpinner;

  pricingId: string = '';

  nome: string = '';
  quantidade: number = 0;
  porcentagemAdicional: number = 0;
  porcentagemLucro: number = 0;
  horasTrabalhadas: string = '00:00';

  get config() {
    return DisplayComponent.config.data;
  }

  constructor(
    private firebaseService: FirebaseService,
    private route: ActivatedRoute,
    private toastService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.route.snapshot.url.some((segment) => segment.path === 'editar')) {
      this.pricingId = this.route.snapshot.paramMap.get('id')!;

      this.firebaseService
        .getDocumentById('pricings', this.pricingId)
        .subscribe((data) => {
          this.nome = data.data.nome;
          this.quantidade = data.data.quantidade;
          this.porcentagemAdicional = data.data.porcentagemAdicional;
          this.porcentagemLucro = data.data.porcentagemLucro;
          this.horasTrabalhadas = data.data.horasTrabalhadas;
          this.selectedItems = data.data.items;
        });
    }

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
    return this.custoInsumos + this.adicional;
  }

  get adicional() {
    return (this.custoInsumos * this.porcentagemAdicional) / 100;
  }

  get lucro() {
    return this.custoInsumos * (this.porcentagemLucro / 100);
  }

  get salario() {
    const [horas, minutos] = this.horasTrabalhadas.split(':');
    const totalHoras = parseInt(horas) + parseInt(minutos) / 60;
    return totalHoras * parseFloat(this.config.salarioHora);
  }

  get precoTotal() {
    return this.custoTotal + this.lucro + this.salario;
  }

  savePricing() {
    this.enviando = true;
    const data = {
      collection: 'pricings',
      firestoreData: {
        nome: this.nome,
        quantidade: this.quantidade,
        adicional: this.adicional,
        porcentagemAdicional: this.porcentagemAdicional,
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

    if (this.pricingId !== '') {
      try {
        this.firebaseService.editarItem(
          data.collection,
          this.pricingId,
          data.firestoreData
        );
        this.toastService.success(
          'Precificação editada com sucesso!',
          'Sucesso'
        );
        this.router.navigate(['/painel/precificacao']);
        this.enviando = false;
      } catch (error) {
        this.toastService.error('Erro ao editar precificação', 'Erro');
      }
      return;
    }

    try {
      this.firebaseService.postFirebase(data);
      this.toastService.success('Precificação salva com sucesso!', 'Sucesso');
      this.router.navigate(['/painel/precificacao']);
      this.enviando = false;
    } catch (error) {
      this.toastService.error('Erro ao salvar precificação', 'Erro');
    }
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

  handleClose() {
    this.closeModal();
  }
}
