import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Contacts } from 'src/app/models/master-model';
import { MasterServiceTsService } from 'src/app/services/master-service';

@Component({
  selector: 'app-wh-resiver-data',
  templateUrl: './wh-resiver-data.component.html',
  styleUrls: ['./wh-resiver-data.component.css']
})
export class WhResiverDataComponent {
  contact: Contacts = new Contacts()
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private masterService: MasterServiceTsService,
  ) { }

  saveContactDetails() {
    if (!this.contact.firstName) {
      this.toastr.error('Kindly provide fullname!');
      return;
    }

    const phoneRegex = /^(\+?\d{1,3}[- ]?)?\d{10}$/;
    if (!phoneRegex.test(this.contact.phoneNumber)) {
      this.toastr.error('Please enter a valid phone number,At least contain 10 numbers!');
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(this.contact.email)) {
      this.toastr.error('Please enter a correct email address!');
      return;
    }
    this.masterService.addContactDetails(this.contact).subscribe(
      (result) => {
        debugger
        if (result) {
          this.contact = new Contacts();
          this.toastr.success('Sign up successful!');
        } else {
          this.toastr.error('Registration failed. Please try again.');
        }
      },
      (err) => {
        this.toastr.error('Failed to register. Please try again later.');
      }
    );
  }
}
