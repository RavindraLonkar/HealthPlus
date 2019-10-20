import { Injectable } from '@angular/core';
import {AbstractControl, FormArray, FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class WsUtilityService {

  constructor() { }

  logValidationErrors(group: FormGroup, validationMessages: any, formErrors: any): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);

      formErrors[key] = '';
      if (abstractControl && !abstractControl.valid || (abstractControl.touched || abstractControl.dirty)) {
        const messages = validationMessages[key];

        for (const errorKey in abstractControl.errors) {
          if (errorKey) {
            formErrors[key] += messages[errorKey] + ' ';
          }
        }
      }

      if (abstractControl instanceof FormGroup) {
        this.logValidationErrors(abstractControl, validationMessages, formErrors);
      }

      if (abstractControl instanceof FormArray) {
        for (const control of abstractControl.controls) {
          if (control instanceof FormGroup) {
            this.logValidationErrors(control, validationMessages, formErrors);
          }
        }
      }
    });
  }
}

export function RequireMatch(control: AbstractControl) {
  const selection: any = control.value;
  debugger;
  if (typeof selection === 'string') {
    return { incorrect: true };
  }
  return null;
}
