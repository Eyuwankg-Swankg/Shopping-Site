import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  @Output() credentials = new EventEmitter<string>();
  email: string = 'eyu@e.cx';
  mobile: string = '878787';
  password: string = 'eyuwankg';
  username: string = 'ljne';

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
