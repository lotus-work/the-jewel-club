import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  
  @Input() isHeadStylish = false; 
  @Input() bannerImage = ""; 
 
  @Input() headFirst = ''; 
  @Input() headMid = ''; 
  @Input() headLast = ''; 
  @Input() headFull = ''; 
  
  @Input() subhead = '';
}
