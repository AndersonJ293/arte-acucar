import { Component } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrl: './display.component.scss',
})
export class DisplayComponent {
  config: any = {};

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit(): void {
    this.firebaseService
      .getDocumentById('company', localStorage.getItem('companyCode')!)
      .subscribe((data) => {
        this.config = data;
        localStorage.setItem('config', JSON.stringify(data));
      });
  }
}
