import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { NgToastService } from 'ng-angular-popup';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiServiceService } from '../../services/api-service/api-service.service';

@Component({
  selector: 'app-contact-the-jewel-club',
  templateUrl: './contact-the-jewel-club.component.html',
  styleUrl: './contact-the-jewel-club.component.css'
})
export class ContactTheJewelClubComponent  implements OnInit {
  contactForm!: FormGroup; // Declare the property with an exclamation mark to tell TypeScript that it will be initialized
  assets: any = ['Connecting with an Ambassador', 'Contacting The Jewel Club', 'Becoming a Host', 'Following up my Order', 'Becoming an Ambassador'];
  all_selected_values: any = [];
  // constructor(private formBuilder: FormBuilder, private spinner: NgxSpinnerService, private _apiCallServices: ApiServiceService, private toast: NgToastService,private titleService: Title, private metaService: Meta) {
 
  constructor(private formBuilder: FormBuilder,private spinner: NgxSpinnerService, private toast: NgToastService,private _apiCallServices: ApiServiceService) {
    // Initialize contactForm in the constructor
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailAddress: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      country: ['', Validators.required]
    });
  }

  messageBody: any ="";
  ngOnInit() {
    this.toast.success({detail:"SUCCESS",summary:'Your Success Message'});

    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailAddress: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      country: ['', Validators.required],
      message: ['', Validators.required],
      interestedIn: this.formBuilder.array([])
    });
  }



  onSubmit() {
    this.spinner.show();
    if (this.contactForm.valid) {

      console.log(this.contactForm.value); // Form data will be logged in the console
      // You can perform further actions like sending data to server etc.

      var hostEmail = "contact@thejewel.club";
      var firstName = this.contactForm.value.firstName;
      var lastName = this.contactForm.value.lastName;
      var emailAddress = this.contactForm.value.emailAddress;
      var phoneNumber = this.contactForm.value.phoneNumber;
      var country = this.contactForm.value.country;
      var message = this.contactForm.value.message;
      
      var subject = "You have a new Contact request from The Jewel Club Website";
      
      this.messageBody = `
      <h2>Hey! Someone just filled the contact form from your website. Here is the below user information:</h2>
      <p><strong>First Name:</strong> ${firstName}</p>
      <p><strong>Last Name:</strong> ${lastName}</p>
      <p><strong>Email Address:</strong> ${emailAddress}</p>
      <p><strong>Phone Number:</strong> ${phoneNumber}</p>
      <p><strong>Country:</strong> ${country}</p>
      <p><strong>Message:</strong> ${message}</p>
  `;

    
    this._apiCallServices.contactLeadApi(hostEmail, subject, this.messageBody).subscribe(res => {
      console.log(res);
      if (res.status == "success") {
          setTimeout(() => {
              this.spinner.hide();
          }, 1000);
          this.toast.success({detail: "THANK YOU", summary: 'Form successfully submitted'});
          setTimeout( () => {
            this.spinner.hide();
              window.location.href = '/thank-you'
          }, 1000);
      
      } else if (res.status == "error") {
        alert(res.message);
        location.reload;
          setTimeout(() => {
              this.spinner.hide();
              window.location.reload();
          }, 3000);
  
      } else if (res.status == "timeout") {
        alert(res.message);
        location.reload;
          setTimeout(() => {
              this.spinner.hide();
              window.location.reload();
          }, 3000);
  
      }
  
  
  }, err => {
     // this._toast.warning({ detail: " FAILED", summary: 'Please try after sometime', position: 'br' });
  
     var errMsg = "";
     var arrErr = [];
     if(this.contactForm.value.firstName == ""){
       arrErr.push("First Name");
     }else if(this.contactForm.value.lastName == ""){
       arrErr.push("Last Name");
     }else if(this.contactForm.value.email == ""){
       arrErr.push("Email");
     }else if(this.contactForm.value.phoneNumber == ""){
       arrErr.push("Phone Number");
     }else if(this.contactForm.value.country == ""){
      arrErr.push("Country");
    }else if(this.contactForm.value.message == ""){
      arrErr.push("Message");
    }
     else{
       errMsg = "Unable to submit. Please re-enter the details manually, in the form. Avoid selecting from pre filled options."
     }

     if(arrErr.length == 0)
     {
       errMsg = "Unable to submit. Maybe enter the details manually in the webform instead of Pre-filled options. or please try after sometime! ";
     }
     else{
       errMsg = "Unable to submit. Please re-enter " + arrErr + ", and try again. Try to enter the details manually."
     }


       alert(errMsg);
      location.reload;
        setTimeout(() => {
            this.spinner.hide();
            window.location.reload();
        }, 1000);
    
  
  
  }, () => console.log("Contact Form"));
    }
    console.log(this.messageBody);

  }

 
}