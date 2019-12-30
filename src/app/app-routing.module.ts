import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthComponent} from "./pages/auth/auth.component";
import {RegistrationComponent} from "./pages/registration/registration.component";
import {UsersComponent} from "./pages/users/users.component";



const routes: Routes = [
  {path:'', pathMatch: 'full', component:AuthComponent},
  {path:'reg',component:RegistrationComponent},
  {path:'list',component:UsersComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
