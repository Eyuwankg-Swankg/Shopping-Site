import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingRoutingModule } from './shopping-routing.module';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SideBarComponent } from './Components/side-bar/side-bar.component';
import { ShoppingContainerComponent } from './Components/shopping-container/shopping-container.component';


@NgModule({
  declarations: [
    NavbarComponent,
    SideBarComponent,
    ShoppingContainerComponent
  ],
  imports: [
    CommonModule,
    ShoppingRoutingModule
  ]
})
export class ShoppingModule { }
