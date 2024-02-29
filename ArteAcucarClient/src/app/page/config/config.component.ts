import { Component, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from '../../services/firebase.service';
import { ToastrService } from 'ngx-toastr';
import { DisplayComponent } from '../display/display.component';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrl: './config.component.scss',
})
export class ConfigComponent implements OnInit {
  selectedSection: string = 'visual';
  previewUrl: string = '';
  enviando: boolean = false;
  file?: any;

  configForm: FormGroup = this.formBuilder.group({
    salarioMensal: ['', Validators.required],
    diasTrabalhoMensal: ['', Validators.required],
    horasTrabalhoDiario: ['', Validators.required],
    salarioHora: [{ value: '', disabled: true }],
    validadeOrcamento: ['', Validators.required],
    mensagemOrcamento: [''],
    metaQtdeOrcamento: [''],
    metaQtdeVendas: [''],
    colorPrimaria: [''],
    colorSecundaria: [''],
    fonteTitulo: [''],
    logo: [''],
  });

  valores: { [key: string]: string } = {
    Orçamento: 'Orçamento Aqui',
    Nome: 'Nome Aqui',
    Idade: 'Idade Aqui',
    Data: 'Data Aqui',
  };

  constructor(
    private formBuilder: FormBuilder,
    private firebaseService: FirebaseService,
    private toastService: ToastrService,
    library: FaIconLibrary
  ) {
    library.addIconPacks(fas, far);
  }

  ngOnInit(): void {
    this.configForm.patchValue(this.configAtual.data);
  }

  get configAtual() {
    return DisplayComponent.config;
  }

  onDragStart(event: DragEvent, value: string) {
    event.dataTransfer?.setData('text/plain', `{{ ${value} }}`);
  }

  substituirValores(texto: string): string {
    for (const key in this.valores) {
      if (this.valores.hasOwnProperty(key)) {
        const regex = new RegExp(`{{\\s*${key}\\s*}}`, 'g');
        texto = texto.replace(regex, this.valores[key]);
      }
    }
    return texto;
  }

  async onSubmit() {
    if (this.configForm.invalid) {
      this.toastService.error('Preencha todos os campos obrigatórios!');
      return;
    }
    this.enviando = true;

    if (this.file != null) {
      const urlImage = await this.firebaseService.uploadImage(
        'company/logo',
        this.configAtual.id,
        this.file
      );

      this.configForm.value.logo = urlImage;
    }

    this.configForm.value.salarioHora =
      this.configForm.value.salarioMensal /
      this.configForm.value.diasTrabalhoMensal /
      this.configForm.value.horasTrabalhoDiario;

    this.configForm.value.salarioHora = parseFloat(
      this.configForm.value.salarioHora
    ).toFixed(2);

    this.firebaseService.editarItem(
      'company',
      this.configAtual.id,
      this.configForm.value
    );

    // this.configAtual.data = this.configForm.value;

    this.toastService.success('Configurações salvas com sucesso!');
    this.enviando = false;
  }

  updateImageAndSubmit() {
    // const companyName = this.configForm.value.name
  }

  onTextChanged(event: string) {
    this.configForm.get('mensagemOrcamento')!.setValue(event);
  }

  onColorPChanged(event: string) {
    this.configForm.get('colorPrimaria')!.setValue(event);
  }

  onColorSChanged(event: string) {
    this.configForm.get('colorSecundaria')!.setValue(event);
  }

  onFontChanged(event: string) {
    this.configForm.get('fonteTitulo')!.setValue(event);
  }

  onLogoChanged(event: any) {
    this.file = event;
  }

  showSection(section: string) {
    this.selectedSection = section;
  }
}
