import { Component } from '@angular/core';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss'],
})
export class DeliveryComponent {
  todaySelected: boolean = true;
  nextSelected: boolean = false;

  deliveries: any[] = [
    {
      title: 'Entrega 1',
      description: 'Descrição da Entrega 1',
      date: new Date(2024, 1, 28, 10, 30),
    },
    {
      title: 'Entrega 2',
      description: 'Descrição da Entrega 2',
      date: new Date(2024, 1, 21, 15, 45),
    },
    {
      title: 'Entrega 3',
      description: 'Descrição da Entrega 3',
      date: new Date(2024, 1, 17, 1, 0),
    },
  ];

  showTodayDeliveries() {
    this.todaySelected = true;
    this.nextSelected = false;
  }

  showNextTwoWeeksDeliveries() {
    this.todaySelected = false;
    this.nextSelected = true;
  }
}
