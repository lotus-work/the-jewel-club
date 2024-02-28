import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CookiePolicyComponent } from './components/cookie-policy/cookie-policy.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { ContactTheJewelClubComponent } from './components/contact-the-jewel-club/contact-the-jewel-club.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { ConnectWithAnAmbassadorComponent } from './components/connect-with-an-ambassador/connect-with-an-ambassador.component';
import { TermsOfUseComponent } from './components/terms-of-use/terms-of-use.component';
import { FindAAmbassadorNearYouComponent } from './components/find-a-ambassador-near-you/find-a-ambassador-near-you.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { FaqPageComponent } from './components/faq-page/faq-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'faqs', component: FaqPageComponent },
  { path: 'cookie-policy', component: CookiePolicyComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'terms-of-use', component: TermsOfUseComponent },
  { path: 'how-it-works', component: HowItWorksComponent },
  { path: 'become-a-host', component: HowItWorksComponent },
  { path: 'contact-the-jewel-club', component: ContactTheJewelClubComponent },
  { path: 'connect-with-an-ambassador', component: ConnectWithAnAmbassadorComponent },
  { path: 'find-a-ambassador-near-you', component: FindAAmbassadorNearYouComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
