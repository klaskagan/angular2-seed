import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {FormValidators} from "../../validators/FormValidators";

@Component({
  selector: 'change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.css']
})
export class ChangePasswordFormComponent implements OnInit {

  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      oldPw: ['', Validators.required],
      newPw: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      repeatPw: ['', Validators.compose([Validators.required, Validators.minLength(5)])]
    }, {validator: FormValidators.passwordsShouldMatch})
  }

  ngOnInit() {
  }

  onSubmit(data): void {
    if (data.oldPw !== "1234") {
      this.form.get('oldPw').setErrors({
        oldPwIsIncorrect: true
      });
    } else {
      alert("Password has been changed");
    }
  }

}
