import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiServiceService } from '../../services/api-service/api-service.service';

@Component({
  selector: 'app-connect-with-an-ambassador',
  templateUrl: './connect-with-an-ambassador.component.html',
  styleUrl: './connect-with-an-ambassador.component.css'
})
export class ConnectWithAnAmbassadorComponent implements OnInit {
  form!: FormGroup;
  interests: { [key: string]: boolean } = {
    becomeConsultant: false,
    hostParty: false,
    otherInterest: false
};

  constructor(private fb: FormBuilder,private spinner: NgxSpinnerService, private toast: NgToastService,private _apiCallServices: ApiServiceService) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phoneType1: ['', Validators.required],
        phone: ['', Validators.required],
        phoneType2: [''],
        secondaryPhone: [''],
        address1: ['', Validators.required],
        address2: [''],
        country: ['', Validators.required],
        city: ['', Validators.required],
        howDidYouHear: ['', Validators.required],
       
    });
}

toggleInterest(interest: string) {
  // Check if the interest exists in the interests object before toggling
  if (this.interests.hasOwnProperty(interest)) {
      this.interests[interest] = !this.interests[interest];
  }
}
formatInterest(key: string): string {
  switch (key) {
      case 'becomeConsultant':
          return 'Become Ambassador';
      case 'hostParty':
          return 'Host Party';
      case 'otherInterest':
          return 'Other Interest';
      default:
          return key;
  }
}
  onSubmit() {
    this.spinner.show();
    console.log(this.form.value);
    console.log(this.interests);
    if (this.form.valid) {
      var hostEmail = "contact@thejewel.club";
      var subject = "You have a new Connect with an Ambassador request from The Jewel Club Website";
      
      const firstName = this.form.value.firstName;
      const lastName = this.form.value.lastName;
      const email = this.form.value.email;
      const phoneType1 = this.form.value.phoneType1;
      const phone = this.form.value.phone;
      const phoneType2 = this.form.value.phoneType2;
      const secondaryPhone = this.form.value.secondaryPhone;
      const address1 = this.form.value.address1;
      const address2 = this.form.value.address2;
      const country = this.form.value.country;
      const city = this.form.value.city;
      const howDidYouHear = this.form.value.howDidYouHear;
  
      var interestString = "";
      const selectedInterests = Object.keys(this.interests)
      .filter(key => this.interests[key])
      .map(key => this.formatInterest(key));
if (selectedInterests.length > 2) {
        interestString = selectedInterests.join(', ');
      } else {
        interestString = selectedInterests.join(' and ');
      }
  
      let messageBody = `
      <h2>Hey! Someone just filled the Connect with an Ambassador form from your website. Here is the below user information:</h2>
      <p><strong>First Name:</strong> ${firstName}</p>
      <p><strong>Last Name:</strong> ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone Type 1:</strong> ${phoneType1}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Address Line 1:</strong> ${address1}</p>
  `;
  

 
  // Check if address2 is not empty and include it in the message body if not
  if (address2.trim() !== "") {
      messageBody += `<p><strong>Address Line 2:</strong> ${address2}</p>`;
  }
  
  // Check if phoneType2 is not empty and include it in the message body if not
  if (phoneType2.trim() !== "") {
      messageBody += `<p><strong>Phone Type 2:</strong> ${phoneType2}</p>`;
  }
  
  // Check if secondaryPhone is not empty and include it in the message body if not
  if (secondaryPhone.trim() !== "") {
      messageBody += `<p><strong>Secondary Phone:</strong> ${secondaryPhone}</p>`;
  }
  
  // Include the rest of the message body only if there is at least one of the specified fields filled
  if (address2.trim() !== "" || phoneType2.trim() !== "" || secondaryPhone.trim() !== "") {
   
  }

  messageBody += `
  <p><strong>Country:</strong> ${country}</p>
  <p><strong>City:</strong> ${city}</p>
  <p><strong>How Did You Hear:</strong> ${howDidYouHear}</p>
  <p><strong>Interests:</strong> ${interestString}</p>
`;
      this._apiCallServices.contactLeadApi(hostEmail, subject, messageBody).subscribe(
        (res) => {
            console.log(res);
            if (res.status === "success") {
                setTimeout(() => {
                    this.spinner.hide();
                }, 1000);
                this.toast.success({ detail: "THANK YOU", summary: 'Form successfully submitted' });
                setTimeout(() => {
                    this.spinner.hide();
                    window.location.href = '/thank-you';
                }, 1000);
            } else if (res.status === "error") {
                alert(res.message);
                location.reload();
                setTimeout(() => {
                    this.spinner.hide();
                    window.location.reload();
                }, 3000);
            } else if (res.status === "timeout") {
                alert(res.message);
                location.reload();
                setTimeout(() => {
                    this.spinner.hide();
                    window.location.reload();
                }, 3000);
            }
        },
        (err) => {
            var errMsg = "";
            var arrErr = [];
            if (this.form.value.firstName === "") {
                arrErr.push("First Name");
            } else if (this.form.value.lastName === "") {
                arrErr.push("Last Name");
            } else if (this.form.value.email === "") {
                arrErr.push("Email");
            } else if (this.form.value.phone === "") {
                arrErr.push("Phone Number");
            } else if (this.form.value.country === "") {
                arrErr.push("Country");
            }
            else if (this.form.value.phoneType1 === "") {
              arrErr.push("Phone Type 1");
          }else if (this.form.value.phone === "") {
            arrErr.push("Phone");
        }else if (this.form.value.phoneType2 === "") {
          arrErr.push("Phone Type 2");
      }else if (this.form.value.secondaryPhone === "") {
        arrErr.push("Secondary Phone");
    }else if (this.form.value.address1 === "") {
      arrErr.push("Address 1");
  }else if (this.form.value.address2 === "") {
    arrErr.push("Address 2");
}else if (this.form.value.country === "") {
  arrErr.push("Country");
}else if (this.form.value.city === "") {
  arrErr.push("City");
}else if (this.form.value.howDidYouHear === "") {
  arrErr.push("howDidYouHear");
} else {
                errMsg = "Unable to submit. Please re-enter the details manually, in the form. Avoid selecting from pre-filled options.";
            }
    
            if (arrErr.length === 0) {
                errMsg = "Unable to submit. Maybe enter the details manually in the webform instead of Pre-filled options. or please try after sometime! ";
            } else {
                errMsg = "Unable to submit. Please re-enter " + arrErr.join(", ") + ", and try again. Try to enter the details manually.";
            }
    
            alert(errMsg);
            location.reload();
            setTimeout(() => {
                this.spinner.hide();
                window.location.reload();
            }, 1000);
        },
        () => console.log("Contact Form")
    );
    
  console.log(messageBody);
      console.log('Form submitted successfully:', this.form.value);
    } else {
      // Form is invalid, display error messages
      console.log('Please fill out all required fields correctly.');
      // You can also display error messages to the user using Angular Material Snackbar or any other method.
    }
  }
  isInterestSelected(): boolean {
    return this.interests['becomeConsultant'] || this.interests['hostParty'] || this.interests['otherInterest'];
}
}