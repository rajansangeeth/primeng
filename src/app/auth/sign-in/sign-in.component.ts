import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Login } from 'src/models/login.model';
import { UserService } from 'src/services/users.service';
import { passwordValidator } from 'src/validators/password.validators';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  form = this.fb.group({
    index: [null, [Validators.required, Validators.min(1)]],
    name: ['', [Validators.required, Validators.minLength(5)]],
    isActive: [true, [Validators.requiredTrue]],
    registered: [new Date(), [Validators.required]],
    age: [null, Validators.required, Validators.min(18), Validators.max(99)],
    gender: ['male', [Validators.required]],
    eyeColor: [''],
    favoriteFruit: [''],
    company: this.fb.group({
      title: ['', Validators.required],
      email: ['', {
        validators: [Validators.required],
      }],
      phone: [''],
      location: this.fb.group({
        country: ['', [Validators.required]],
        address: ['', [Validators.required]]
      })
    }),
    tags: this.fb.array([]),
  })

  constructor(private fb: FormBuilder) {

  }

  get company() {
    return this.form.controls['company'] as FormGroup;
  }

  get tags() {
    return this.form.controls['tags'] as FormArray;
  }

  get location() {
    return this.company.controls['location'] as FormGroup;
  }

  addTags() {
    this.tags.push(new FormControl(''))
  }

  ngOnInit(): void {
    
  }

}
