import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { CookiePolicyComponent } from './components/cookie-policy/cookie-policy.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from './components/terms-of-use/terms-of-use.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ConnectWithAnAmbassadorComponent } from './components/connect-with-an-ambassador/connect-with-an-ambassador.component';
import { ContactTheJewelClubComponent } from './components/contact-the-jewel-club/contact-the-jewel-club.component';
import { FaqPageComponent } from './components/faq-page/faq-page.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'faqs', component: FaqPageComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'connect-with-an-ambassador', component: ConnectWithAnAmbassadorComponent},
  {path: 'contact', component: ContactTheJewelClubComponent},
  {path: 'cookie-policy', component: CookiePolicyComponent},
  {path: 'privacy-policy', component: PrivacyPolicyComponent},
  {path: 'terms-of-use', component: TermsOfUseComponent},
  {path: 'thank-you', component: ThankYouComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
