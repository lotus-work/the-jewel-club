import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { NgToastService } from 'ng-angular-popup';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiServiceService } from '../../services/api-service/api-service.service';
@Component({
  selector: 'app-contact-the-jewel-club',
  templateUrl: './contact-the-jewel-club.component.html',
  styleUrl: './contact-the-jewel-club.component.css'
})
export class ContactTheJewelClubComponent implements OnInit {
  contactForm!: FormGroup; // Declare the property with an exclamation mark to tell TypeScript that it will be initialized
  assets: any = ['Connecting with an Ambassador', 'Contacting The Jewel Club', 'Becoming a Host', 'Following up my Order', 'Becoming an Ambassador'];
  all_selected_values: any = [];
  constructor(private formBuilder: FormBuilder, private spinner: NgxSpinnerService, private _apiCallServices: ApiServiceService, private toast: NgToastService,private titleService: Title, private metaService: Meta) {
    // Initialize contactForm in the constructor
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailAddress: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      country: ['', Validators.required],
      interestedIn: this.formBuilder.array([])
    });
  }

  messageBody: any ="";
  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailAddress: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      country: ['', Validators.required],
      interestedIn: this.formBuilder.array([])
    });
  }

  onChange(value: string): void {
    if (this.all_selected_values.includes(value)) {
      this.all_selected_values = this.all_selected_values.filter((item: string) => item !== value);
    } else {
      this.all_selected_values.push(value);
    }
    console.log(this.all_selected_values);
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value); // Form data will be logged in the console
      // You can perform further actions like sending data to server etc.

      
      var firstName = this.contactForm.value.firstName;
      var lastName = this.contactForm.value.lastName;
      var emailAddress = this.contactForm.value.emailAddress;
      var phoneNumber = this.contactForm.value.phoneNumber;
      var country = this.contactForm.value.country;
      var intrestedIn = this.all_selected_values.join(', ');;
      
      var subject = "You have a new Contact request from The Jewel Club Website";
      
      this.messageBody =  `
      <p>First Name: ${firstName}</p>
      <p>Last Name: ${lastName}</p>
      <p>Email Address: ${emailAddress}</p>
      <p>Phone Number: ${phoneNumber}</p>
      <p>Country: ${country}</p>
      <p>Interested In: ${intrestedIn}</p>
    `;
    }
    console.log(this.messageBody);

  //   this._apiCallServices.contactLeadApi(emailAddress, subject, this.messageBody).subscribe(res => {
  //     console.log(res);
  //     if (res.status == "success") {
  //         setTimeout(() => {
  //             this.spinner.hide();
  //         }, 1000);
  //         this.toast.success({detail: "THANK YOU", summary: 'Form successfully submitted', position: 'br'});
  //         // setTimeout(function () {
  //         //     window.location.href = '/thank-you'
  //         // }, 1000);
  //         setTimeout(() => {
  //           this.spinner.hide();
  //           window.location.reload();
  //       }, 3000);
  //     } else if (res.status == "error") {
  //       alert(res.message);
  //       location.reload;
  //         setTimeout(() => {
  //             this.spinner.hide();
  //             window.location.reload();
  //         }, 3000);
  
  //     } else if (res.status == "timeout") {
  //       alert(res.message);
  //       location.reload;
  //         setTimeout(() => {
  //             this.spinner.hide();
  //             window.location.reload();
  //         }, 3000);
  
  //     }
  
  
  // }, err => {
  //    // this._toast.warning({ detail: " FAILED", summary: 'Please try after sometime', position: 'br' });
  
  //    var errMsg = "";
  //    var arrErr = [];
  //    if(form.value.firstName == ""){
  //      arrErr.push("First Name");
  //    }else if(form.value.lastName == ""){
  //      arrErr.push("Last Name");
  //    }else if(form.value.email == ""){
  //      arrErr.push("Email");
  //    }else if(form.value.phoneNumber == ""){
  //      arrErr.push("Phone Number");
  //    }else if(form.value.citiesLikeToBuy == ""){
  //     arrErr.push("What cities do you like to buy in?");
  //   }else if(form.value.propertyCriteria == ""){
  //     arrErr.push("What types of property criteria do you require?");
  //   }else if(form.value.returnLokking == ""){
  //     arrErr.push("What type of return are you typically looking? (What is your buy formula?)");
  //   }else if(form.value.handlePropertiesPerMonth == ""){
  //     arrErr.push("How many properties per month can you handle?");
  //   }else{
  //      errMsg = "Unable to submit. Please re-enter the details manually, in the form. Avoid selecting from pre filled options."
  //    }

  //    if(arrErr.length == 0)
  //    {
  //      errMsg = "Unable to submit. Maybe enter the details manually in the webform instead of Pre-filled options. or please try after sometime! ";
  //    }
  //    else{
  //      errMsg = "Unable to submit. Please re-enter " + arrErr + ", and try again. Try to enter the details manually."
  //    }


  //      alert(errMsg);
  //     location.reload;
  //       setTimeout(() => {
  //           this.spinner.hide();
  //           window.location.reload();
  //       }, 1000);
    
  
  
  // }, () => console.log("INVESTOR SINGUP FORM SUMBITTED SUCCESSFULLY"));
  }

 
}