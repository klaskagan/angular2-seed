import {Component} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
    selector: 'signup-form',
    templateUrl: './signup-form.component.html',
})
export class SignUpFormComponent {

  form: FormGroup = new FormGroup({
    username: new FormControl("",Validators.required),
    password: new FormControl("", Validators.required)
  });

  constructor() {
  }


  onSubmit(value) {
    console.log(value);
  }
}
