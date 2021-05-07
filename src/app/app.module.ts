import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import {   httpInterceptorProviders } from './interceptors';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { ContainerComponent } from './components/layout/container/container.component';
import { ItemOverviewComponent } from './components/item-overview/item-overview.component';
import { PageTitleComponent } from './components/layout/page-title/page-title.component';
import { StockIndicatorComponent } from './components/stock-indicator/stock-indicator.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContainerComponent,
    ItemOverviewComponent,
    PageTitleComponent,
    StockIndicatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    httpInterceptorProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
