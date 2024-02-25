import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { NgChartsModule } from 'ng2-charts';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './page/display/display.component';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { PricingComponent } from './page/pricing/pricing.component';
import { PricingEditComponent } from './page/pricing/pricing-edit/pricing-edit.component';
import { PricingModalComponent } from './page/pricing/pricing-modal/pricing-modal.component';
import { BudgetEditComponent } from './page/budget/budget-edit/budget-edit.component';
import { BudgetModalComponent } from './page/budget/budget-modal/budget-modal.component';
import { ProductComponent } from './page/product/product.component';
import { ProductEditComponent } from './page/product/product-edit/product-edit.component';
import { ProductModalComponent } from './page/product/product-modal/product-modal.component';
import { AnalysisComponent } from './components/analysis/analysis.component';
import { GraphComponent } from './components/analysis/graph/graph.component';
import { GraphSelectorComponent } from './components/analysis/graph-selector/graph-selector.component';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { DeliveryListComponent } from './components/delivery/delivery-list/delivery-list.component';
import { LegendComponent } from './components/delivery/legend/legend.component';
import { StockComponent } from './components/stock/stock.component';
import { StockListComponent } from './components/stock/stock-list/stock-list.component';
import { GoalComponent } from './components/goal/goal.component';
import { ProgressBarComponent } from './components/goal/progress-bar/progress-bar.component';
import { GoalSelectorComponent } from './components/goal/goal-selector/goal-selector.component';
import { AllInfoComponent } from './components/all-info/all-info.component';
import { CardInfoComponent } from './components/all-info/card-info/card-info.component';
import { TextBudgetComponent } from './components/text-budget/text-budget.component';
import { BudgetReportComponent } from './page/budget-report/budget-report.component';
import { PhonePipe } from './pipes/phone.pipe';
import { ConfigVisualComponent } from './page/config/config-visual/config-visual.component';

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
    PricingComponent,
    PricingEditComponent,
    PricingModalComponent,
    BudgetEditComponent,
    BudgetModalComponent,
    ProductComponent,
    ProductEditComponent,
    ProductModalComponent,
    AnalysisComponent,
    GraphComponent,
    GraphSelectorComponent,
    DeliveryComponent,
    DeliveryListComponent,
    LegendComponent,
    StockComponent,
    StockListComponent,
    GoalComponent,
    ProgressBarComponent,
    GoalSelectorComponent,
    AllInfoComponent,
    CardInfoComponent,
    TextBudgetComponent,
    BudgetReportComponent,
    PhonePipe,
    ConfigVisualComponent,
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
    ReactiveFormsModule,
    NgChartsModule,
    NgCircleProgressModule,
    NgCircleProgressModule.forRoot({
      responsive: true,
      lazy: true,
    }),
  ],
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase },
    provideAnimations(),
    provideToastr(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
