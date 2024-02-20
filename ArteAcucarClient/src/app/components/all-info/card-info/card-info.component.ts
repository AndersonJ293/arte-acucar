import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrl: './card-info.component.scss',
})
export class CardInfoComponent {
  @Input() title: string = '';
  @Input() profit: number = 0;
  @Input() salary: number = 0;
  @Input() costs: number = 0;
  @Input() additional: number = 0;
}
