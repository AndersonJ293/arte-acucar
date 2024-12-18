import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-commodities',
  templateUrl: './commodities.component.html',
  styleUrl: './commodities.component.scss',
})
export class CommoditiesComponent implements OnInit {
  commoditiesList: Array<Commoditie> = [];
  faAdd = faAdd;

  constructor(private firebaseService: FirebaseService) {}

  getCommodities() {
    this.firebaseService
      .getCollectionWithIds('commodities')
      .subscribe((docs) => {
        this.commoditiesList = docs;
      });
  }

  ngOnInit(): void {
    this.getCommodities();
  }

  addCommoditie() {
    let index = this.commoditiesList.findIndex((item) => item.newItem);

    if (index !== -1) {
      this.commoditiesList.splice(index, 1);
    }

    this.commoditiesList.push(new TCommoditie()); // adiciona um item vazio na lista
  }

  get menuOpen() {
    return MenuService.menuOpen;
  }
}
class TCommoditie {
  newItem = true;
}

interface Commoditie {
  id?: string;
  newItem?: boolean;
  data?: {
    name: string;
    brand: string;
    quantity: number;
    stock: number;
    price: number;
  };
}
