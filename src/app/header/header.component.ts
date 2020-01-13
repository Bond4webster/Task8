import { Component, OnInit } from '@angular/core';
import {UserServiceService} from "../services/user-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  email = localStorage.getItem('email')
  constructor(
    private auth: UserServiceService,
    private router: Router
  ) { }
  logout(event: Event){
    event.preventDefault();
    this.auth.logout();
    this.router.navigate(['/']);
  }

  ngOnInit() {
  }

}
