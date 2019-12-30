import {Component,  OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  title = 'User app';
  form:FormGroup;
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      login: new FormControl('',[
        Validators.required
      ]),
      password: new FormControl(null,[
        Validators.required,
        Validators.minLength(6)
      ])
    });
  }

  submit() {
    console.log(this.form.value);
    this.form.reset();
  }
}
