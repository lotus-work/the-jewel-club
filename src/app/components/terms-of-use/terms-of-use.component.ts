import { Component } from '@angular/core';

@Component({
  selector: 'app-terms-of-use',
  templateUrl: './terms-of-use.component.html',
  styleUrl: './terms-of-use.component.css'
})
export class TermsOfUseComponent {

  isHeadStylish = true; 
  bannerImage = "../../../assets/img/faq_legal/terms-use.jpg"; 
 
  headFirst = 'The Jewel Club';
  
  subhead = 'Terms of Use';
}
