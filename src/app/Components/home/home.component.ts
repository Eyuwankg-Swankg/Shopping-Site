import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  logo: string = '/assets/images/amazon_icon_black.png';
  constructor(private router: Router) {}

  ngOnInit(): void {}
  handleShop(): void {
    this.router.navigate(['/shopping']);
  }
  handleLogin(): void {
    this.router.navigate(['/login']);``
  }
}
