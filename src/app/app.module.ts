import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UsersComponent } from './pages/users/users.component';
import { UserInfoComponent } from './pages/user-info/user-info.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { AuthComponent } from './pages/auth/auth.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserInfoComponent,
    HeaderComponent,
    RegistrationComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
