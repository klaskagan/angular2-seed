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
      username: ['', Validators.compose([
        Validators.required,
        V.FormValidators.cannotContainSpace]
      )],
      password: ['', Validators.required]
    })
  }


  onSubmit(value) {
    console.log(value);
  }
}
