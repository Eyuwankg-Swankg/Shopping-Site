import { Component, Input, OnInit } from '@angular/core';
import { faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  user: any = faUser;
  cartIcon: any = faCartShopping;
  logo: string = '/assets/images/logo.png';
  itemCount: number = 0;
  @Input() data: any;
  constructor(private router: Router) {}

  ngOnInit(): void {
    
    console.log(this.data);
  }
  goToHome() {this.router.navigate(['/login'])}
}
