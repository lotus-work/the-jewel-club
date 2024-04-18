import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../services/api-service/api-service.service';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.css'
})
export class FaqsComponent implements OnInit {
  faqs: any[] =[
    {
        "Question": "Can we change the size if the client is not satisfied with the ring?",
        "Answer": "No, this is why we take your size. Production is done in a way that resizing is impossible. A unique mold is made for your unique ring."
    },
    {
        "Question": "How to purchase jewels from The Jewel Club?",
        "Answer": "Take your size with one of our ambassadors. Sketch your desired jewel and you will receive a quote within 48 hours (quote will be valid for 14 days only - price of gold and gemstones fluctuates daily). Confirmation of an order is done. Delivery 1 or 2 months later (depending on stone availability and complexity)"
    },
    {
        "Question": "What is the benefit of buying from The Jewel Club?",
        "Answer": "You buy a ring for a fraction of the retail cost. We are a bespoke jewel maker. Like a tailor who makes suits, shirts and more, we produce the same quality (material and craftsmanship) as luxury brands tailor to our clients unique size and requirements for a fraction of the cost. ON AVERAGE 10 TO 20 TIMES LESS."
    }
];

  constructor(private apiService: ApiServiceService) { }

  ngOnInit(): void {
    //this.fetchData();
  }

  fetchData() {
    this.apiService.fetchFAQData().subscribe(
      (response) => {
        this.faqs = response.data; // Assign the FAQ data to the array
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}