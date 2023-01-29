import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PublicComponent } from './public.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        data: {
          breadcrumb: 'Home',
        },
      },
      {
        path: 'summary',
        component: SummaryComponent,
        data: {
          breadcrumb: 'Resumo',
        },
      },
      {
        path: 'portfolio',
        component: PortfolioComponent,
        data: {
          breadcrumb: 'Portifólio',
        },
      },
      {
        path: 'contact',
        component: ContactComponent,
        data: {
          breadcrumb: 'Contato',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
