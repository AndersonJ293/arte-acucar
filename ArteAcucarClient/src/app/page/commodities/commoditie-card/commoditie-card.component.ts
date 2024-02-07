import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-commoditie-card',
  templateUrl: './commoditie-card.component.html',
  styleUrl: './commoditie-card.component.scss',
})
export class CommoditieCardComponent {
  @Input() name?: string;
  @Input() brand?: string;
  @Input() stock?: number;
  @Input() price?: number;

  editMode: boolean = false;

  handleEdit() {
    this.editMode = !this.editMode;
  }

  handleEditButton() {
    if (this.editMode) {
      console.log('Save');
      this.handleEdit();

      return;
    }
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
}
