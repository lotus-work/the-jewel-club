import { AfterViewInit, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-connect-with-ambassador',
  templateUrl: './connect-with-ambassador.component.html',
  styleUrl: './connect-with-ambassador.component.css'
})
export class ConnectWithAmbassadorComponent  implements AfterViewInit {

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