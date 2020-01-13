import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {FbAuthResponse, UserAuth, UserModel} from "../UserModel";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }

  registration(){
  }
  get token(): string{
    return '';
  }
  login(user:UserAuth): Observable<any>{
    console.log(user);
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
      .pipe(
      tap(this.setToken)
      );
  }
  logout(){

  }
  isAuthenticated(): boolean {
    return !!this.token

  }
  private setToken(response: FbAuthResponse){
    console.log(response)
  }
}
