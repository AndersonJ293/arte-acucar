import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './page/display/display.component';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SignInComponent } from './page/sign-in/sign-in.component';
import { BudgetComponent } from './page/budget/budget.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { environment } from './environment/environment';
import { AngularFireModule, FIREBASE_OPTIONS } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthGuardModule } from '@angular/fire/compat/auth-guard';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';
import { MenuItemComponent } from './components/sidebar-menu/menu-item/menu-item.component';
import { ConfigComponent } from './page/config/config.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { CommoditiesComponent } from './page/commodities/commodities.component';
import { CommoditieCardComponent } from './page/commodities/commoditie-card/commoditie-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DisplayComponent,
    SignInComponent,
    BudgetComponent,
    SidebarMenuComponent,
    MenuItemComponent,
    ConfigComponent,
    DashboardComponent,
    CommoditiesComponent,
    CommoditieCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireAuthGuardModule,
    AngularFireStorageModule,
  ],
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase },
    provideAnimations(),
    provideToastr(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
