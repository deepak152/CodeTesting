
 import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { MainBodyComponent } from './main-body/main-body.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { CarouselComponent } from './carousel/carousel.component';

import {SlideshowModule} from 'ng-simple-slideshow';
import { AppModule } from './app.module';

@NgModule({
  imports: [
    
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    SlideshowModule,
    MatToolbarModule,
    AppModule,
    BrowserTransferStateModule
    

  ],
  exports: [AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppBrowserModule { }