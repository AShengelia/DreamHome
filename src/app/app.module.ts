import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './Main';
import { NavbarComponent } from './navbar/navbar';
import { FooterComponent } from './footer/footer';
import { HomePageComponent } from './pages/home-page/homePage';
import { AboutUsComponent } from './pages/about-us/about-us';
import { PropertiesComponent } from './pages/properties/properties';
import { BuildersComponent } from './pages/builders/builders';
import { ServicesComponent } from './pages/services/services';
import { ContactComponent } from './contactUs/contactUs';
import { SearchbarComponent } from './searchbar/searchbar';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { Select2Module } from 'ng-select2-component';
import { MapPartComponent } from './map-part/mapPart';
import { InfotabComponent } from './infotab/infotab';
import { FormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap/alert';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ContactpageComponent } from './pages/contactpage/contactpage';
import { UparrowComponent } from './uparrow/uparrow';






@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomePageComponent,
    AboutUsComponent,
    PropertiesComponent,
    BuildersComponent,
    ServicesComponent,
    ContactComponent,
    SearchbarComponent,
    MapPartComponent,
    InfotabComponent,
    ContactpageComponent,
    UparrowComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSliderModule,
    Select2Module,
    FormsModule,
    AlertModule.forRoot(),
    TabsModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
