import { Component, OnInit } from '@angular/core';
import {userStorage} from "./userStorage";
import {UserModel} from "../../UserModel";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  selectedUser: UserModel;
  users = userStorage;
  constructor() { }

  onSelect(user: UserModel): void {
    this.selectedUser = user;
  }

  ngOnInit() {
  }

}
