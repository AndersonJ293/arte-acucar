import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './page/display/display.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SignInComponent } from './components/sign-in/sign-in.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, DisplayComponent, SignInComponent],
  imports: [BrowserModule, AppRoutingModule, CommonModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
