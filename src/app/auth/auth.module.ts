import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { EmailVerificationComponent } from './email-verification/email-verification.component';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import { SkeletonModule } from "primeng/skeleton";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputNumberModule} from 'primeng/inputnumber';


@NgModule({
  declarations: [
    AuthComponent,
    SignUpComponent,
    SignInComponent,
    ForgetPasswordComponent,
    EmailVerificationComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    CardModule,
    InputTextModule,
    SkeletonModule,
    FormsModule,
    ButtonModule,
    CheckboxModule,
    RadioButtonModule,
    ReactiveFormsModule,
    InputNumberModule
  ]
})
export class AuthModule { }
