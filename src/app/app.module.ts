import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// Routes
import { AppRoutingModule } from './app-routing.module';

// Components
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactComponent } from './components/contact/contact.component';

// Services

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    WhyUsComponent,
    AboutComponent,
    ServicesComponent,
    DepartmentsComponent,
    DoctorsComponent,
    GalleryComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
