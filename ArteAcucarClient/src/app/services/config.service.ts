import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  public static config: any = {};

  constructor(private firebaseService: FirebaseService) {}

  public loadConfig() {
    this.getConfig();
    return ConfigService.config;
  }

  private getConfig() {
    this.firebaseService
      .getDocumentById('company', this.companyCode!)
      .subscribe((data) => {
        console.log(data);

        ConfigService.config = data;
      });
  }

  get companyCode() {
    return localStorage.getItem('companyCode');
  }
}
