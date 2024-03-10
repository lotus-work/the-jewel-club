import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  @ViewChild('iframe') iframe?: ElementRef;

  constructor() { }

  ngOnInit(): void {
    if (this.iframe) {
      const iframeElement = this.iframe.nativeElement;
      const iframeDocument = iframeElement.contentWindow.document;

      // Hide elements inside the iframe
      const elementsToHide = iframeDocument.querySelectorAll('.eapps-instagram-feed a, #eapps-instagram-feed-1 a');
      elementsToHide.forEach((element: HTMLElement) => {
        element.style.display = 'none';
      });
    }
  }
}
