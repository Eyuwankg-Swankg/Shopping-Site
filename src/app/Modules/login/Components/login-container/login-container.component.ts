import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.css'],
})
export class LoginContainerComponent implements OnInit {
  logo: string = '/assets/images/amazon_icon_black.png';
  signUpData: any = {};
  constructor() {}

  ngOnInit(): void {}
  getChildData(event: any): void {
    this.signUpData = JSON.parse(event);
  }
}
