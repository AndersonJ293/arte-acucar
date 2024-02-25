import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomizationService {
  private primaryColorSubject = new BehaviorSubject<string>('#f9e8f2');
  private secondaryColorSubject = new BehaviorSubject<string>('#541514');
  private headerFontSubject = new BehaviorSubject<string>('Courgette, cursive');

  primaryColor$: Observable<string> = this.primaryColorSubject.asObservable();
  secondaryColor$: Observable<string> =
    this.secondaryColorSubject.asObservable();
  headerFont$: Observable<string> = this.headerFontSubject.asObservable();

  updatePrimaryColor(color: string) {
    this.primaryColorSubject.next(color);
  }

  updateSecondaryColor(color: string) {
    this.secondaryColorSubject.next(color);
  }

  updateHeaderFont(font: string) {
    this.headerFontSubject.next(font);
  }
}
