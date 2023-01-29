import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicModule } from './pages/public/public.module';
import { CoreModule } from './pages/template/core/core.module';
import {
  NgxUiLoaderConfig,
  NgxUiLoaderHttpModule,
  NgxUiLoaderModule,
  NgxUiLoaderRouterModule,
  PB_DIRECTION,
  POSITION,
  SPINNER,
} from 'ngx-ui-loader';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: '#ffc107',
  bgsOpacity: 0.5,
  bgsPosition: POSITION.bottomLeft,
  bgsSize: 60,
  bgsType: SPINNER.chasingDots,
  // blur: 5,
  // delay: 0,
  fastFadeOut: true,
  fgsColor: '#ffc107',
  fgsPosition: POSITION.centerCenter,
  fgsSize: 150,
  fgsType: SPINNER.ballScaleMultiple,
  gap: 20,
  logoPosition: POSITION.centerCenter,
  //logoSize: 100,
  //logoUrl: 'assets/images/logo.png',
  // overlayBorderRadius: '0',
  overlayColor: 'rgba(40, 40, 40, 0.4)',
  pbColor: '#ffc107',
  pbDirection: PB_DIRECTION.leftToRight,
  pbThickness: 5,
  hasProgressBar: true,
  text: 'Carregando...',
  textColor: '#FFFFFF',
  textPosition: POSITION.centerCenter,
  // maxTime: -1,
  // minTime: 500
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PublicModule,
    CoreModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderHttpModule.forRoot({ showForeground: true }),
    NgxUiLoaderRouterModule.forRoot({ showForeground: true }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
