import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner-legal',
  templateUrl: './banner-legal.component.html',
  styleUrl: './banner-legal.component.css'
})
export class BannerLegalComponent {

  @Input() isHeadStylish = false; 
  @Input() bannerImage = ""; 
 
  @Input() headFirst = '';
  
  @Input() subhead = '';
}
