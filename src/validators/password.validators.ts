import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export function passwordValidator(): ValidatorFn {
  return (abstractControl: AbstractControl): ValidationErrors | null => {
    const value = abstractControl.value;

    if (!value) {
      return null
    }

    const upperCase = /[A-Z]/.test(value)
    const lowerCase = /[A-Z]/.test(value)
    const hasNumbers = /[0-9]/.test(value)
    const hasSymbol = /@/.test(value)
    const validEmail = upperCase && lowerCase && hasNumbers && hasSymbol

    return validEmail ? null : {emailError: 'Enter a valid email.'}
  }
}