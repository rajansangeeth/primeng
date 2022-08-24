import { AbstractControl, AsyncValidatorFn } from "@angular/forms";
import { map } from "rxjs";
import { UserService } from "src/services/users.service";

export function emailValidator(users: UserService): AsyncValidatorFn {
  return (abstractControl: AbstractControl) => {
    return (users.getEmail().pipe(map(emailData => {
      const emailExists = emailData.find(a => a.toLowerCase() == abstractControl.value.toLowerCase())
      return emailExists ? {'emailExists': 'Email already exists.'} : null;
    })))
  }

}