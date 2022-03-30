import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  @Input() userData: any = {
    email: '',
    username: '',
    mobile: '',
    password: '',
  };
  password: string = this.userData.password;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  handleSubmit(form: any): void {
    if (form.password == this.userData.password) {
      sessionStorage.setItem('credentials', JSON.stringify(this.userData));
      this.router.navigate(['/shopping'])
    } else alert('Password Incorrect');
  }
}
