import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './page/display/display.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SignInComponent } from './page/sign-in/sign-in.component';
<<<<<<< HEAD
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DisplayComponent,
    SignInComponent,
    MenuComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, CommonModule, FormsModule, FontAwesomeModule],
=======
import { PricingComponent } from './page/pricing/pricing.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, DisplayComponent, SignInComponent, PricingComponent],
  imports: [BrowserModule, AppRoutingModule, CommonModule, FormsModule],
>>>>>>> 5c1cff2a49370f89ec90377156b8d04e7588a9d0
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
