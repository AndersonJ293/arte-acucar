import { Component, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from '../../services/firebase.service';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { DisplayComponent } from '../display/display.component';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrl: './config.component.scss',
})
export class ConfigComponent implements OnInit {
  configForm: FormGroup = this.formBuilder.group({
    salarioMensal: ['', Validators.required],
    diasTrabalhoMensal: ['', Validators.required],
    horasTrabalhoDiario: ['', Validators.required],
    salarioHora: [{ value: '', disabled: true }],
    validadeOrcamento: ['', Validators.required],
    mensagemOrcamento: [''],
    metaQtdeOrcamento: [''],
    metaQtdeVendas: [''],
    metaRecebimento: [''],
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
    private toastService: ToastrService
  ) {}

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

  onSubmit() {
    if (this.configForm.invalid) {
      this.toastService.error('Preencha todos os campos obrigatórios!');
      return;
    }

    this.configForm.value.salarioHora =
      this.configForm.value.salarioMensal /
      this.configForm.value.diasTrabalhoMensal /
      this.configForm.value.horasTrabalhoDiario;

    parseFloat(this.configForm.value.salarioHora).toFixed(2);
    this.firebaseService.editarItem(
      'company',
      this.configAtual.id,
      this.configForm.value
    );

    // this.configAtual.data = this.configForm.value;

    this.toastService.success('Configurações salvas com sucesso!');
  }

  onTextChanged(event: string) {
    this.configForm.get('mensagemOrcamento')!.setValue(event);
  }
}
