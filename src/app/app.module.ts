import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { SliderComponent } from './slider/slider.component';
import { SliderDescComponent } from './slider/slider-desc/slider-desc.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuBarComponent,
    SliderComponent,
    SliderDescComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
