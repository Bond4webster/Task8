import {Component,  OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserAuth} from "../../UserModel";
import {UserServiceService} from "../../services/user-service.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  title = 'User app';
  form:FormGroup;
  constructor(private userService: UserServiceService,
              private router:Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('',[
        Validators.required
      ]),
      password: new FormControl(null,[
        Validators.required,
        Validators.minLength(6)
      ])
    });
  }

  submit() {
    const user: UserAuth = {
      email: this.form.value.email,
      password: this.form.value.password
    }
    this.userService.login(user).subscribe(()=>{
      this.form.reset();
      this.router.navigate(['/list']);
    });

  }
}
