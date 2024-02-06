import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './page/sign-in/sign-in.component';
import { DisplayComponent } from './page/display/display.component';
import { PricingComponent } from './page/pricing/pricing.component';
import { BudgetComponent } from './page/budget/budget.component';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  {
    path: 'painel',
    component: DisplayComponent,
    children: [
      { path: 'precificacao', component: PricingComponent },
      { path: 'orcamento', component: BudgetComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
