import { Component, Input } from '@angular/core';
import { FirebaseService } from '../../../services/firebase.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-commoditie-card',
  templateUrl: './commoditie-card.component.html',
  styleUrl: './commoditie-card.component.scss',
})
export class CommoditieCardComponent {
  @Input() id?: string;
  @Input() name?: string;
  @Input() brand?: string;
  @Input() quantity?: number;
  @Input() stock?: number;
  @Input() price: number = 0;

  editMode: boolean = false;

  constructor(
    private firebaseService: FirebaseService,
    private toastService: ToastrService
  ) {}

  handleEditMode() {
    this.editMode = !this.editMode;
  }

  handleEditButton() {
    // save
    if (this.editMode) {
      if (!this.validateForm()) {
        this.toastService.error('Por favor preencha todos os campos', 'Erro');
        return;
      }

      if (this.id) {
        this.handleEdit();
        this.handleEditMode();
        return;
      }

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
    if (!this.editMode) {
      this.firebaseService.excluirItem('commodities', this.id!);
    }
    if (this.editMode) {
      this.handleEditMode();
    }
  }

  validateForm(): boolean {
    return (
      this.name!.length !== 0 &&
      this.quantity !== 0 &&
      this.stock !== 0 &&
      this.price !== 0
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
      price: this.price,
    });
  }
}
