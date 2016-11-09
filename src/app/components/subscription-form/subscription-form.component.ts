import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css']
})
export class SubscriptionFormComponent implements OnInit {

  emailPeriods: string[] = [];

  constructor() {
  }

  ngOnInit() {
    this.emailPeriods.push("Daily", "Weekly", "Monthly");
  }

  onFormSubmit(ngForm: NgForm) {
    let data = ngForm.value;
    console.log(JSON.stringify(data))
  }

}
