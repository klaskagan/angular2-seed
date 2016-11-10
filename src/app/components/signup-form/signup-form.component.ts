import {Component} from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import * as V from "../../validators/FormValidators";

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
})
export class SignUpFormComponent {

  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      username: [
        'niko', // default value in a form. Should be used when editing existing form
        Validators.compose([Validators.required, V.FormValidators.cannotContainSpace]), // non async validators
        V.FormValidators.usernameShouldBeUnique], // async validators
      password: ['', Validators.required]
    })
  }


  onSubmit(value) {
    this.form.get('username').setErrors({
      invalidLogin: true
    });
    console.log(value);
  }
}
