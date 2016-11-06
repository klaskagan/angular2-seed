import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(ngForm) {
    let data = ngForm.value;
    console.log(ngForm);
    console.log(data.firstName);
    console.log(data.comment);
  }

}
