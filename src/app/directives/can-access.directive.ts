import { Directive, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: '[appCanAccess]'
})

export class CanAccessDirective {
  accessCode: any[] = []
  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {
    this.accessCode = JSON.parse(localStorage.getItem('accessCode') || '')
  }

  appCanAccess(code: string) {
    if (this.accessCode.includes(code)) {
      return true
    } else {
      return false
    }
  }
}