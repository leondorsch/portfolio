import { HttpClient } from '@angular/common/http';
import { Component, inject, NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import AOS from "aos";
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  constructor() {
    AOS.init();
  }
  isChecked = false;
  wasSent = false;
  http = inject(HttpClient);
  contactData = {
    name: "",
    email: "",
    message: "",
  }

  post = {
    endPoint: 'https://leon-dorsch.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.wasSent = true;
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    }
  }
}
