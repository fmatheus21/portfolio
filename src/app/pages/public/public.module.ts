import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { CoreModule } from '../template/core/core.module';
import { HomeComponent } from './home/home.component';
import { SummaryComponent } from './summary/summary.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [PublicComponent, HomeComponent, SummaryComponent, PortfolioComponent, ContactComponent],
  imports: [CommonModule, PublicRoutingModule, CoreModule],
})
export class PublicModule {
  constructor() {
    console.log('PublicModule loaded.');
  }
}
