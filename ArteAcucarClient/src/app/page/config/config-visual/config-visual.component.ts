import {
  Component,
  EventEmitter,
  Input,
  Output,
  Renderer2,
} from '@angular/core';
import { CustomizationService } from '../../../services/customization.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-config-visual',
  templateUrl: './config-visual.component.html',
  styleUrl: './config-visual.component.scss',
})
export class ConfigVisualComponent {
  @Input() configForm: FormGroup = new FormGroup({});
  @Output() colorPChanged = new EventEmitter<string>();
  @Output() colorSChanged = new EventEmitter<string>();
  @Output() fontChanged = new EventEmitter<string>();

  previewUrl: string = '';

  constructor(private customizationService: CustomizationService) {}

  updatePrimaryColor(color: string) {
    this.customizationService.updatePrimaryColor(color);
  }

  updateSecondaryColor(color: string) {
    this.customizationService.updateSecondaryColor(color);
  }

  updateHeaderFont(font: string) {
    this.customizationService.updateHeaderFont(font);
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

  onChange() {
    this.colorPChanged.emit(this.configForm.get('colorPrimaria')!.value);
    this.colorSChanged.emit(this.configForm.get('colorSecundaria')!.value);
    this.fontChanged.emit(this.configForm.get('fonteTitulo')!.value);
  }
}
