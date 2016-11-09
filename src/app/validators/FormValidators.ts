import {FormControl} from "@angular/forms";


export class FormValidators {

  static cannotContainSpace(control: FormControl): any {
    if (control.value.indexOf(" ") >= 0) {
      return {containsSpace: true}
    }
    return null;
  }
}
