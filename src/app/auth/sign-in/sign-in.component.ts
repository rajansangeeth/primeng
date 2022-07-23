import { Component, OnInit } from '@angular/core';
import { Login } from 'src/models/login.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  model: Login = new Login()
  constructor() { }

  ngOnInit(): void {

  }

}
