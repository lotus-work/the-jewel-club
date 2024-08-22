import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
declare var Instafeed: any;

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  @ViewChild('iframe') iframe?: ElementRef;

galleryData: any[] = [];
selectedImageUrl: string | null = null;

private localStorageKey = 'galleryData';
private expiryKey = 'galleryDataExpiry';
private apiUrl = 'https://v1.nocodeapi.com/lotusbiswas/instagram/tNAWSEKPGXamlAro'; // Replace with your actual API endpoint

constructor(private http: HttpClient) {}

ngOnInit(): void {
  this.loadGalleryData();
}

openModal(imageUrl: string): void {
  this.selectedImageUrl = imageUrl; // Set the clicked image URL
}

private loadGalleryData(): void {
  const storedData = localStorage.getItem(this.localStorageKey);
  const expiry = localStorage.getItem(this.expiryKey);

  if (storedData && expiry && new Date().getTime() < new Date(expiry).getTime()) {
    const parsedData = JSON.parse(storedData);
    this.galleryData = Array.isArray(parsedData) ? parsedData : [];
  } else {
    this.fetchGalleryData();
  }
}

private fetchGalleryData(): void {
  this.http.get<any>(this.apiUrl).subscribe(
    (response) => {
      // Assuming the API returns an object with the gallery data in a 'data' property
      const galleryArray = response.data || []; // Adjust this based on your API structure
      this.galleryData = Array.isArray(galleryArray) ? galleryArray : [];
      this.saveGalleryData(this.galleryData);
    },
    (error) => {
      console.error('Error fetching gallery data:', error);
    }
  );
}
private saveGalleryData(data: any[]): void {
  localStorage.setItem(this.localStorageKey, JSON.stringify(data));
  const expiryDate = new Date();
  expiryDate.setDate(expiryDate.getDate() + 2); // Set expiry date to 2 days from now
  localStorage.setItem(this.expiryKey, expiryDate.toISOString());
}
}