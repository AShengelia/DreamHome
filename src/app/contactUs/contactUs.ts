import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contactUs',
  templateUrl: './contactUs.html',
  styleUrls: ['./contactUs.css']
})
export class ContactComponent implements OnInit {

  constructor(private FB: FormBuilder) { }

  ngOnInit(): void {
  }




  UserForm = this.FB.group({
    name: [''],
    email: ['', [Validators.email]],
    tel: ['', [Validators.pattern('[- + 0-9]{3}-[0-9]{3}-[0-9]{3} ')]]
  })


  UpDateName() {
    this.UserForm.patchValue({
      name: "",
      email: "",
      tel: ""
    })
  }

  sendData() {
    let data = JSON.stringify(this.UserForm.value)
  }

}
