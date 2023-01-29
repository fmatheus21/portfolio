import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoBarComponent } from './info-bar/info-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ServiceComponent } from './service/service.component';
import { BannerComponent } from './banner/banner.component';
import { CounterComponent } from './counter/counter.component';
import { PlanComponent } from './plan/plan.component';
import { TestimonyComponent } from './testimony/testimony.component';
import { BrandComponent } from './brand/brand.component';
import { RouterModule } from '@angular/router';
import { MenuBarComponent } from './menu-bar/menu-bar.component';

@NgModule({
  declarations: [
    InfoBarComponent,
    FooterComponent,
    ServiceComponent,
    BannerComponent,
    CounterComponent,
    PlanComponent,
    TestimonyComponent,
    BrandComponent,
    MenuBarComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    InfoBarComponent,
    FooterComponent,
    ServiceComponent,
    BannerComponent,
    CounterComponent,
    PlanComponent,
    TestimonyComponent,
    BrandComponent,
    MenuBarComponent,
  ],
})
export class CoreModule {}
