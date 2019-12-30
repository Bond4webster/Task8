import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserModel} from "../UserModel";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }

  registration(user:UserModel):Observable<UserModel>{
    const userData = {surname:user.surname,name:user.name,cityID:user.cityID,login:user.login,password:user.password};
    return this.http.post<UserModel>('http://localhost:3000/User/',userData);
  }
}
