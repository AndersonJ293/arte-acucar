import { Component, Renderer2 } from '@angular/core';
import { CustomizationService } from '../../../services/customization.service';

@Component({
  selector: 'app-config-visual',
  templateUrl: './config-visual.component.html',
  styleUrl: './config-visual.component.scss',
})
export class ConfigVisualComponent {
  previewUrl: string = '';
  primaryColor: string = '';
  secondaryColor: string = '';
  headerFont: string = '';

  constructor(private customizationService: CustomizationService) {}

  ngOnInit() {
    this.customizationService.updatePrimaryColor(this.primaryColor);
    this.customizationService.updateSecondaryColor(this.secondaryColor);
    this.customizationService.updateHeaderFont(this.headerFont);
  }

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
}
