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
  @Input() price?: number;

  editMode: boolean = false;

  constructor(
    private firebaseService: FirebaseService,
    private toastService: ToastrService
  ) {}

  handleEdit() {
    this.editMode = !this.editMode;
  }

  handleEditButton() {
    // save
    if (this.editMode) {
      if (!this.validateForm()) {
        this.toastService.error('Por favor preencha todos os campos', 'Erro');
        return;
      }

      this.handleSave();
      this.handleEdit();

      return;
    }
    // enter edit
    if (!this.editMode) {
      console.log('Edit');
      this.handleEdit();
    }
  }

  handleDeleteButton() {
    if (!this.editMode) console.log('Delete');
    if (this.editMode) {
      console.log('Cancel');
      this.handleEdit();
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
}
