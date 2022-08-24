import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { EmailVerificationComponent } from './email-verification/email-verification.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path: "",
    component: AuthComponent,
    children: [
      {
        path: "",
        component: SignInComponent
      },
      {
        path: "sign-in",
        component: SignInComponent
      },
      {
        path: "sign-up",
        component: SignUpComponent
      },
      {
        path: "forget-password",
        component: ForgetPasswordComponent
      },
      {
        path: "email-verification",
        component: EmailVerificationComponent
      },
      {
        path: "**",
        redirectTo: "sign-in",
        pathMatch: "full"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
