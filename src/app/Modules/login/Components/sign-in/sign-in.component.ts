import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  email: string = '';
  mobile: string = '';
  password: string = '';
  constructor() {}

  ngOnInit(): void {}

  handleSubmit(form: any): void {
    console.log(form);
  }
}
