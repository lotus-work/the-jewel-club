import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ConnectComponent } from './components/connect/connect.component';
import { CookiePolicyComponent } from './components/cookie-policy/cookie-policy.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from './components/terms-of-use/terms-of-use.component';
import { HomeComponent } from './components/home/home.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { BecomeAHostComponent } from './components/become-a-host/become-a-host.component';
import { FindAAmbassadorNearYouComponent } from './components/find-a-ambassador-near-you/find-a-ambassador-near-you.component';
import { ConnectWithAnAmbassadorComponent } from './components/connect-with-an-ambassador/connect-with-an-ambassador.component';
import { ContactTheJewelClubComponent } from './components/contact-the-jewel-club/contact-the-jewel-club.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { BannerComponent } from './components/banner/banner.component';
import { FaqPageComponent } from './components/faq-page/faq-page.component';
import { BannerLegalComponent } from './components/banner-legal/banner-legal.component';
import { LightgalleryModule } from 'lightgallery/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgToastModule } from 'ng-angular-popup';
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AboutUsComponent,
    GalleryComponent,
    ConnectComponent,
    CookiePolicyComponent,
    PrivacyPolicyComponent,
    TermsOfUseComponent,
    HomeComponent,
    HowItWorksComponent,
    BecomeAHostComponent,
    FindAAmbassadorNearYouComponent,
    ConnectWithAnAmbassadorComponent,
    ContactTheJewelClubComponent,
    FaqsComponent,
    BannerComponent,
    FaqPageComponent,
    BannerLegalComponent
  ],
  imports: [
    NgToastModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule ,
    BrowserAnimationsModule,
    NgxSpinnerModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
