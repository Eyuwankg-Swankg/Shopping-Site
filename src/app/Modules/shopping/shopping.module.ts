import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { ShoppingRoutingModule } from './shopping-routing.module';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SideBarComponent } from './Components/side-bar/side-bar.component';
import { ShoppingContainerComponent } from './Components/shopping-container/shopping-container.component';
import { ContentComponent } from './Components/content/content.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SideBarComponent,
    ShoppingContainerComponent,
    ContentComponent,
  ],
  imports: [CommonModule, ShoppingRoutingModule,FontAwesomeModule,FormsModule],
})
export class ShoppingModule {}
