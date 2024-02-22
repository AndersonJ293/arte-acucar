import { Component, OnInit } from '@angular/core';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { MenuService } from '../../services/menu.service';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss',
})
export class PricingComponent implements OnInit {
  faAdd = faAdd;
  pricings: any[] = [];

  constructor(
    private firebaseService: FirebaseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.firebaseService
      .getCollectionWithIds('pricings')

      .subscribe((data) => {
        this.pricings = data;
      });
  }

  get menuOpen() {
    return MenuService.menuOpen;
  }

  editPricing(pricingId: string) {
    this.router.navigate(['painel/precificacao/editar', pricingId]);
  }
}
