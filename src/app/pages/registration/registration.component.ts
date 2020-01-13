import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserServiceService} from "../../services/user-service.service";
import {UserModel} from "../../UserModel";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  title:string = 'Registration';
  form:FormGroup;
  constructor(private userService:UserServiceService) { }
  ngOnInit() {
    this.form = new FormGroup({
      login: new FormControl('',[
        Validators.required
      ]),
      password: new FormControl(null,[
        Validators.required,
        Validators.minLength(6)
      ]),
      surname: new FormControl('',[
        Validators.required,
        Validators.pattern(/^[A-Z][a-z]+$/)
      ]),
      name: new FormControl('',[
        Validators.required,
        Validators.pattern(/^[A-Z][a-z]+$/)
      ]),
      cityID: new FormControl('',[
        Validators.required
      ])
    });
  }

  submit() {
    console.log(this.form.value);
    const user: UserModel = {
      name: this.form.value.name,
      surname: this.form.value.surname,
      cityID: this.form.value.cityID,
      login: this.form.value.login,
      password: this.form.value.password
    }
    this.userService.registration(user).subscribe();
    this.form.reset();
  }
}
