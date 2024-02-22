import { Component } from '@angular/core';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { MenuService } from '../../services/menu.service';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  faAdd = faAdd;
  produtcs: any[] = [];

  constructor(
    private firebaseService: FirebaseService,
    private router: Router
  ) {}

  get menuOpen() {
    return MenuService.menuOpen;
  }

  ngOnInit(): void {
    this.firebaseService
      .getCollectionWithIds('products')

      .subscribe((data) => {
        this.produtcs = data;
      });
  }

  editPricing(productId: string) {
    this.router.navigate(['painel/produto/editar', productId]);
  }
}
