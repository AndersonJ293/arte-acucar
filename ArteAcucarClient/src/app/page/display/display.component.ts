import { Component, HostBinding } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { CustomizationService } from '../../services/customization.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrl: './display.component.scss',
})
export class DisplayComponent {
  public static config: any = {};
  primaryColor: string = '';
  secondaryColor: string = '';
  headerFont: string = '';

  // @HostBinding('style.--var') var = 'red';

  carregado: boolean = false;
  constructor(
    private firebaseService: FirebaseService,
    private customizationService: CustomizationService
  ) {}

  ngOnInit(): void {
    this.firebaseService
      .getDocumentById('company', localStorage.getItem('companyCode')!)
      .subscribe((data) => {
        DisplayComponent.config = data;

        this.carregado = true;
      });

    this.customizationService.primaryColor$.subscribe(
      (color) => (this.primaryColor = color)
    );
    this.customizationService.secondaryColor$.subscribe(
      (color) => (this.secondaryColor = color)
    );
    this.customizationService.headerFont$.subscribe(
      (font) => (this.headerFont = font)
    );
  }
}
