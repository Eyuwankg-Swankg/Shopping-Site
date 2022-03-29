import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  username: string = '';
  email: string = '';
  mobile: string = '';
  password: string = '';
  constructor() {}

  ngOnInit(): void {}

  handleSubmit(form: any): void {
    
  }
}
