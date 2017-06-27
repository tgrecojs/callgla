import { Component, OnInit } from '@angular/core';

import { Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { AngularFire } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
formView = true;
    isSubmitted = false;
    contactForm: FormGroup;
    name: AbstractControl;
    email: AbstractControl;
    reason: AbstractControl;
    location: AbstractControl;
    phoneNumber: AbstractControl;
    message: AbstractControl;


    reasons = [
       { reason: 'Business or Corporate Law'},
       {
        reason: 'Employment Law'
       },
       {
        reason: 'Estate Administration and Tax Planning'
       },
       {
        reason: `Immigration Law`
       },
       {
        reason: 'State and Federal Taxation'
       },
       {
        reason: 'Municipal Law'
       },
       {
        reason: 'Real Estate'
       }
        ];

    entries:any;
    constructor(private af: AngularFire, fb: FormBuilder) {
    this.entries = af.database.list('/contacts');
    // Formbuild for validations
    // Validators are just plain functions!
    this.contactForm = fb.group({
        'name': ['', Validators.required],
        'email':['', Validators.required],
        'location': ['', Validators.required],
        'reason': [''],
        'phoneNumber': ['', Validators.required],
        'message': ['', Validators.minLength(30)]
});
this.name = this.contactForm.controls['name'];
this.email = this.contactForm.controls['email'];
this.reason = this.contactForm.controls['reason'];
this.location = this.contactForm.controls['location'];

this.phoneNumber = this.contactForm.controls['phoneNumber'];
this.message = this.contactForm.controls['message'];

  }

    onSubmit(formValue: Object) {
        console.log(formValue);
        this.entries.push(formValue);
        this.isSubmitted = true;
        this.formView = false;
    }


  ngOnInit() {
    console.log('hello `Estimate` component');
  }



}