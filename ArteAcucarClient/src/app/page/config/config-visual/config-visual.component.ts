import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
} from '@angular/core';
import { CustomizationService } from '../../../services/customization.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-config-visual',
  templateUrl: './config-visual.component.html',
  styleUrl: './config-visual.component.scss',
})
export class ConfigVisualComponent implements OnInit {
  @Input() configForm: FormGroup = new FormGroup({});
  @Output() colorPChanged = new EventEmitter<string>();
  @Output() colorSChanged = new EventEmitter<string>();
  @Output() fontChanged = new EventEmitter<string>();
  @Output() fileChanged = new EventEmitter<any>();

  previewUrl: string = '';
  file?: any;

  selectedFont: string = '';

  ngOnInit(): void {
    this.previewUrl = this.configForm.value.logo;
  }

  onDrop(event: any): void {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    this.handleFile(file);
    this.onChange();
  }

  onDragOver(event: any): void {
    event.preventDefault();
  }

  onFileSelected(event: any): void {
    this.file = event.target.files[0];
    this.handleFile(this.file);
    this.onChange();
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
    this.fileChanged.emit(this.file);
  }
}
