import { Directive, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: '[canAccess]'
})

export class CanAccessDirective {
  accessRights: any = JSON.parse(localStorage.getItem("canAccess") || '') ?? []
  constructor(private template: TemplateRef<any>, private viewContainer: ViewContainerRef) {

  }

  canAccess(code: string) {
    if (this.accessRights.includes(code)) {
      this.viewContainer.createEmbeddedView(this.template);
    } else {
      this.viewContainer.clear();
    }
  }
}