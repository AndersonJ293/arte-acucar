import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './page/sign-in/sign-in.component';
import { DisplayComponent } from './page/display/display.component';
import { PricingComponent } from './page/pricing/pricing.component';
import { BudgetComponent } from './page/budget/budget.component';
import { ConfigComponent } from './page/config/config.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { CommoditiesComponent } from './page/commodities/commodities.component';
import { PricingEditComponent } from './page/pricing/pricing-edit/pricing-edit.component';
import { BudgetEditComponent } from './page/budget/budget-edit/budget-edit.component';
import { ProductComponent } from './page/product/product.component';
import { AuthGuard } from './guard/auth.guard';
import { ProductEditComponent } from './page/product/product-edit/product-edit.component';
import { BudgetReportComponent } from './page/budget-report/budget-report.component';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  {
    path: 'painel',
    component: DisplayComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: DashboardComponent },
      {
        path: 'precificacao',
        component: PricingComponent,
      },
      { path: 'precificacao/adicionar', component: PricingEditComponent },
      { path: 'precificacao/editar/:id', component: PricingEditComponent },
      { path: 'orcamento', component: BudgetComponent },
      { path: 'orcamento/adicionar', component: BudgetEditComponent },
      { path: 'orcamento/editar/:id', component: BudgetEditComponent },
      { path: 'produto', component: ProductComponent },
      { path: 'produto/adicionar', component: ProductEditComponent },
      { path: 'produto/editar/:id', component: ProductEditComponent },
      { path: 'config', component: ConfigComponent },
      { path: 'insumos', component: CommoditiesComponent },
    ],
  },
  { path: 'orcamento/impressao/:id', component: BudgetReportComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
