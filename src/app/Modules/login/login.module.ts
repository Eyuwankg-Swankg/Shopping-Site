import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { LoginContainerComponent } from './Components/login-container/login-container.component';

@NgModule({
  declarations: [SignInComponent, SignUpComponent, LoginContainerComponent],
  imports: [CommonModule, LoginRoutingModule, FormsModule],
})
export class LoginModule {}
