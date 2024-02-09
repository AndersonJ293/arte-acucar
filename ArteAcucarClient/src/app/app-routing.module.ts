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

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  {
    path: 'painel',
    component: DisplayComponent,
    children: [
      { path: '', component: DashboardComponent },
      {
        path: 'precificacao',
        component: PricingComponent,
      },
      { path: 'precificacao/adicionar', component: PricingEditComponent },
      { path: 'precificacao/editar', component: PricingEditComponent },
      { path: 'orcamento', component: BudgetComponent },
      { path: 'orcamento/adicionar', component: BudgetEditComponent },
      { path: 'orcamento/editar', component: BudgetEditComponent },
      { path: 'produto', component: ProductComponent },
      { path: 'config', component: ConfigComponent },
      { path: 'insumos', component: CommoditiesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
