import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LocationDescriptionSectionComponent } from './location-description-section/location-description-section.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ApartmentDescriptionSectionComponent } from './apartment-description-section/apartment-description-section.component';
import { FooterComponent } from './footer/footer.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    CarouselComponent,
    LocationDescriptionSectionComponent,
    GalleryComponent,
    ApartmentDescriptionSectionComponent,
    FooterComponent,
    ContactSectionComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient]
      }
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
