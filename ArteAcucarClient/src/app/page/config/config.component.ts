import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from '../../services/firebase.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrl: './config.component.scss',
})
export class ConfigComponent implements OnInit {
  configAtual: any = {};

  configForm: FormGroup = this.formBuilder.group({
    salarioMensal: ['', Validators.required],
    diasTrabalhoMensal: ['', Validators.required],
    horasTrabalhoDiario: ['', Validators.required],
    salarioHora: [{ value: '', disabled: true }],
    validadeOrcamento: ['', Validators.required],
    inicioMensagemOrcamento: [''],
    fimMensagemOrcamento: [''],
    metaQtdeOrcamento: [''],
    metaQtdeVendas: [''],
    metaRecebimento: [''],
  });

  constructor(
    private formBuilder: FormBuilder,
    private firebaseService: FirebaseService,
    private toastService: ToastrService
  ) {}

  ngOnInit(): void {
    this.configAtual = JSON.parse(localStorage.getItem('config')!);

    this.configForm.patchValue(this.configAtual.data);
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

    this.configAtual.data = this.configForm.value;

    this.toastService.success('Configurações salvas com sucesso!');
  }
}
