import { AfterViewInit, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrl: './how-it-works.component.css'
})
export class HowItWorksComponent {

  @ViewChild('bgVideo') bgVideo: any;

  constructor() { }

  ngAfterViewInit(): void {
    this.playVideoInSafari();
  }

  playVideoInSafari(): void {
    const video = this.bgVideo.nativeElement;
    video.play().then(() => {
      // Video is playing
    }).catch(() => {
      // Auto-play is disabled, trying to play the video on user interaction
      video.play();
    });
  }
}