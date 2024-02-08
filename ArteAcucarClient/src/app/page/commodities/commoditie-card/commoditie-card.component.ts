import { Component, Input, OnInit } from '@angular/core';
import { FirebaseService } from '../../../services/firebase.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-commoditie-card',
  templateUrl: './commoditie-card.component.html',
  styleUrl: './commoditie-card.component.scss',
})
export class CommoditieCardComponent implements OnInit {
  cancelled: boolean = false;
  @Input() id?: string;
  @Input() name?: string;
  @Input() brand?: string;
  @Input() quantity?: number = 0;
  @Input() stock?: number = 0;
  @Input() price?: number = 0;

  editMode: boolean = false;

  constructor(
    private firebaseService: FirebaseService,
    private toastService: ToastrService
  ) {}

  ngOnInit(): void {
    if (!this.id) {
      this.editMode = true;
      this.name = '';
    }
  }

  handleEditMode() {
    this.editMode = !this.editMode;
  }

  handleEditButton() {
    // se estiver em modo edição
    if (this.editMode) {
      // validação dos campos
      if (!this.validateForm()) {
        console.log('Preencha todos os campos');

        this.toastService.error('Preencha todos os campos', 'Erro');
        return;
      }

      // se tiver id é uma edição
      if (this.id) {
        this.handleEdit();
        this.handleEditMode();

        return;
      }

      // se não tiver id é um novo item
      this.handleSave();
      this.handleEditMode();

      return;
    }
    // enter edit
    if (!this.editMode) {
      this.handleEditMode();
    }
  }

  handleDeleteButton() {
    // cancelar inclusão
    if (this.editMode && !this.id) {
      this.cancelled = true;
      return;
    }

    // excluir
    if (!this.editMode) {
      if (window.confirm('Deseja excluir este item?'))
        this.firebaseService.excluirItem('commodities', this.id!);
      return;
    }

    // cancelar
    if (this.editMode) {
      this.handleEditMode();
    }
  }

  validateForm(): boolean {
    return (
      this.name!.length > 0 &&
      this.quantity !== null &&
      this.stock !== null &&
      this.price !== undefined
    );
  }

  handleSave() {
    const data = {
      collection: 'commodities',
      firestoreData: {
        name: this.name,
        brand: this.brand,
        quantity: this.quantity,
        stock: this.stock,
        price: this.price,
      },
    };

    this.firebaseService.postFirebase(data);
  }

  handleEdit() {
    this.firebaseService.editarItem('commodities', this.id!, {
      name: this.name,
      brand: this.brand,
      quantity: this.quantity,
      stock: this.stock,
      price: this.price as number,
    });
  }
}
