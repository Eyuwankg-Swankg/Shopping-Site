import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  @Output() credentials = new EventEmitter<string>();
  email: string = '';
  mobile: string = '';
  password: string = '';
  username: string = '';

  constructor() {}

  ngOnInit(): void {}

  handleSubmit(form: any): void {
    this.credentials.emit(
      JSON.stringify({
        email: form.email,
        username: form.username,
        mobile: form.mobile,
        password: form.password,
      })
    );
  }
}
