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
    
  }
}
