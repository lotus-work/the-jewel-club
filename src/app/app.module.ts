import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { HostTheJewelClubDemoComponent } from './components/host-the-jewel-club-demo/host-the-jewel-club-demo.component';
import { FindAConsultantNearYouComponent } from './components/find-a-consultant-near-you/find-a-consultant-near-you.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { WhatAJewelClubDemoComponent } from './components/what-a-jewel-club-demo/what-a-jewel-club-demo.component';
import { JoinTheJewelClubComponent } from './components/join-the-jewel-club/join-the-jewel-club.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookiePolicyComponent } from './components/cookie-policy/cookie-policy.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from './components/terms-of-use/terms-of-use.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgToastModule } from 'ng-angular-popup';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { GalleryComponent } from './components/gallery/gallery.component';
import { ConnectWithAnAmbassadorComponent } from './components/connect-with-an-ambassador/connect-with-an-ambassador.component';
import { ContactTheJewelClubComponent } from './components/contact-the-jewel-club/contact-the-jewel-club.component';
import { ConnectWithAmbassadorComponent } from './components/connect-with-ambassador/connect-with-ambassador.component';
import { FaqPageComponent } from './components/faq-page/faq-page.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutUsComponent,
    HowItWorksComponent,
    HostTheJewelClubDemoComponent,
    FindAConsultantNearYouComponent,
    FaqsComponent,
    FooterComponent,
    BannerComponent,
    ContactComponent,
    HomeComponent,
    WhatAJewelClubDemoComponent,
    JoinTheJewelClubComponent,
    CookiePolicyComponent,
    PrivacyPolicyComponent,
    TermsOfUseComponent,
    GalleryComponent,
    ConnectWithAnAmbassadorComponent,
    ContactTheJewelClubComponent,
    ConnectWithAmbassadorComponent,
    FaqPageComponent
  ],
  imports: [
    NgToastModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule ,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    HttpClientModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
