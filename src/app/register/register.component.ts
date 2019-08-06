import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  payload = {};

  onSubmit(form: NgForm) {
    // @ts-ignore
    this.payload.firstName = form.value.firstName;
    // @ts-ignore
    this.payload.lastName = form.value.lastName;
    // @ts-ignore
    this.payload.email = form.value.email;
    // @ts-ignore
    this.payload.phoneNumber = form.value.phoneNumber;
    // ajax call
    // call our service to send api request to api
    console.log('Your form data : ', this.payload );
  }

  constructor() { }

  ngOnInit() {
  }

}
