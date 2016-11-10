import {FormControl} from "@angular/forms";


export class FormValidators {

  static usernameShouldBeUnique(control: FormControl) {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        if (control.value == "niko") {
          resolve({shouldBeUnique: true});
        }
        resolve(null)
      }, 1000);
    });

  }

  static cannotContainSpace(control: FormControl): any {
    if (control.value.indexOf(" ") >= 0) {
      return {containsSpace: true}
    }
    return null;
  }
}
