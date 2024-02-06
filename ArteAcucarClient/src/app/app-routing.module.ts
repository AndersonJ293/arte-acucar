import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './page/sign-in/sign-in.component';
import { DisplayComponent } from './page/display/display.component';
import { PricingComponent } from './page/pricing/pricing.component';
import { PricingComponent } from './page/pricing/pricing.component';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  {
    path: 'painel',
    component: DisplayComponent,
    children: [{ path: 'precificacoes', component: PricingComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
