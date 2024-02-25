import { Component, HostBinding } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./colors.scss', './display.component.scss'],
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
        this.updateCSSVariables();
      });
  }

  private updateHostBindings(): void {
    this.primaryColor = DisplayComponent.config.data?.colorPrimaria;
    this.secondaryColor = DisplayComponent.config.data?.colorSecundaria;
    this.headerFont = DisplayComponent.config.data?.fonteTitulo;
  }

  private updateCSSVariables(): void {
    document.documentElement.style.setProperty(
      '--display-primary-color',
      this.primaryColor
    );
    document.documentElement.style.setProperty(
      '--display-secondary-color',
      this.secondaryColor
    );
    document.documentElement.style.setProperty(
      '--display-header-font',
      this.headerFont
    );
  }

  @HostBinding('style.--display-primary-color')
  primaryColor: string = '#f8f8fa';

  @HostBinding('style.--display-secondary-color')
  secondaryColor: string = '#541514';

  @HostBinding('style.--display-header-font')
  headerFont: string = 'Courgette';
}
