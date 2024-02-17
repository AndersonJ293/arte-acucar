import { Component, Input, OnChanges } from '@angular/core';
import { faCalendarAlt, faClock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-delivery-list',
  templateUrl: './delivery-list.component.html',
  styleUrls: ['./delivery-list.component.scss'],
})
export class DeliveryListComponent implements OnChanges {
  faCalendarAlt = faCalendarAlt;
  faClock = faClock;

  @Input() deliveries: any[] = [];
  @Input() todaySelected: boolean = true;
  @Input() nextSelected: boolean = false;

  currentDeliveries: any[] = [];

  ngOnChanges() {
    this.showDeliveries();
  }

  showDeliveries() {
    const today = new Date();
    const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    const twoWeeksLater = new Date(today.getTime() + 14 * 24 * 60 * 60 * 1000);

    if (this.todaySelected) {
      this.currentDeliveries = this.deliveries.filter((delivery) => {
        return (
          delivery.date.getFullYear() === today.getFullYear() &&
          delivery.date.getMonth() === today.getMonth() &&
          delivery.date.getDate() === today.getDate()
        );
      });
    } else if (this.nextSelected) {
      this.currentDeliveries = this.deliveries.filter((delivery) => {
        return delivery.date >= nextWeek && delivery.date < twoWeeksLater;
      });
    } else {
      this.currentDeliveries = this.deliveries;
    }
  }

  getLegendColor(deliveryDate: Date): string {
    const today = new Date();
    const threeDaysFromNow = new Date(
      today.getTime() + 3 * 24 * 60 * 60 * 1000
    );
    const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

    if (deliveryDate < threeDaysFromNow) {
      return '#ff6e6e';
    } else if (deliveryDate < nextWeek) {
      return '#ffe769';
    } else {
      return '#7eff6e';
    }
  }
}
