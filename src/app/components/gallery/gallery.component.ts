import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
declare var Instafeed: any;

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  @ViewChild('iframe') iframe?: ElementRef;

  constructor() { }

  images: any[] = [];

  ngOnInit() {
    const userFeed = new Instafeed({
      get: 'user',
      target: 'instafeed-container',
      resolution: 'low_resolution',
      accessToken: 'IGQWROUXpqUENkM3Q4WUlNdE45MVVpcmhtelc1clN5NU1Ddmxyc2pmWVpHUzN0cnRKQmI1ajgyOEl1NXBkMldwMUl6dUY2OEM0dllHd0dCY3ViZAnlMeGxWMmFZAY09RV3JCcTBibDZAMd1RpT0ZAFRzZAJd3RwaElUUTAZD'
    });

    userFeed.run((data: any) => {
      this.images = data.data;
    });
  }
}
