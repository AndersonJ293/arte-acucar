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
        // localStorage.setItem()
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
      this.primaryColor != ''
        ? this.primaryColor
        : (this.primaryColor = '#541514')
    );
    document.documentElement.style.setProperty(
      '--display-secondary-color',
      this.secondaryColor != ''
        ? this.secondaryColor
        : (this.secondaryColor = '#0067DB')
    );
    document.documentElement.style.setProperty(
      '--display-header-font',
      this.headerFont != ''
        ? this.headerFont
        : (this.headerFont = 'Poppins, sans-serif')
    );
  }

  @HostBinding('style.--display-primary-color')
  primaryColor: string = '#f8f8fa';

  @HostBinding('style.--display-secondary-color')
  secondaryColor: string = '#541514';

  @HostBinding('style.--display-header-font')
  headerFont: string = 'Courgette';
}
