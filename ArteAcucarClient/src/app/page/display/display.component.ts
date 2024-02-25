import { Component, HostBinding } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrl: './display.component.scss',
})

export class DisplayComponent {
  public static config: any = {};
  carregado: boolean = false;

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit(): void {
    this.firebaseService
      .getDocumentById('company', localStorage.getItem('companyCode')!)
      .subscribe((data) => {
        DisplayComponent.config = data;
        this.carregado = true;
        this.updateHostBindings();
      });
  }

  private updateHostBindings(): void {
    this.primaryColor = DisplayComponent.config.data?.colorPrimaria;
    this.secondaryColor = DisplayComponent.config.data?.colorSecundaria;
    this.headerFont = DisplayComponent.config.data?.fonteTitulo;
  }

  @HostBinding('style.--primary-color')
  primaryColor: string = '#f8f8fa';

  @HostBinding('style.--secondary-color')
  secondaryColor: string = '#541514';

  @HostBinding('style.--header-font')
  headerFont: string = 'Courgette';
}
