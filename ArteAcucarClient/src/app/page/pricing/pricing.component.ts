import { Component } from '@angular/core';
import { faAdd } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss',
})
export class PricingComponent {
  faAdd = faAdd;
}
