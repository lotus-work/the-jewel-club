import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { ConnectWithAmbassadorComponent } from './components/connect-with-ambassador/connect-with-ambassador.component';
import { HostTheJewelClubDemoComponent } from './components/host-the-jewel-club-demo/host-the-jewel-club-demo.component';
import { FindAConsultantNearYouComponent } from './components/find-a-consultant-near-you/find-a-consultant-near-you.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { WhatAJewelClubDemoComponent } from './components/what-a-jewel-club-demo/what-a-jewel-club-demo.component';
import { JoinTheJewelClubComponent } from './components/join-the-jewel-club/join-the-jewel-club.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutUsComponent,
    HowItWorksComponent,
    ConnectWithAmbassadorComponent,
    HostTheJewelClubDemoComponent,
    FindAConsultantNearYouComponent,
    FaqsComponent,
    FooterComponent,
    BannerComponent,
    ContactComponent,
    HomeComponent,
    WhatAJewelClubDemoComponent,
    JoinTheJewelClubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
