import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./Modules/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'shopping',
    loadChildren: () =>
      import('./Modules/shopping/shopping.module').then(
        (m) => m.ShoppingModule
      ),
  },
  // redirect route to home-page for page not found, generally ** used for page not found
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
