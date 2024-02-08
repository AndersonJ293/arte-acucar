import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-commodities',
  templateUrl: './commodities.component.html',
  styleUrl: './commodities.component.scss',
})
export class CommoditiesComponent implements OnInit {
  commoditiesList: Array<Commoditie> = [];

  constructor(private firebaseService: FirebaseService) {}

  getCommodities() {
    this.firebaseService
      .getCollectionWithIds('commodities')
      .subscribe((docs) => {
        this.commoditiesList = [];
        docs.forEach((doc) => {
          const id = doc.id;
          const data = doc.data;
          this.commoditiesList.push({ id, ...data });
        });
      });
  }

  ngOnInit(): void {
    this.getCommodities();
  }
}

interface Commoditie {
  id: string;
  name: string;
  brand: string;
  quantity: number;
  stock: number;
  price: number;
}
