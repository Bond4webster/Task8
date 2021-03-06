import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {FbAuthResponse, UserAuth, UserModel} from "../UserModel";
import {Observable, Subject, throwError} from "rxjs";
import {environment} from "../../environments/environment";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  public error$: Subject<string> = new Subject<string>();
  constructor(private http:HttpClient) { }

  registration(user:UserModel) {
    console.log(user);
    return this.http.post('http://localhost:3000/User/reg',user).subscribe((response)=>{
      console.log(response);
    })
  }
  get token(): string{
    const expDate = new Date(localStorage.getItem('fb-token-exp'));
    if(new Date() > expDate){
      this.logout();
      return null;
    }
    return localStorage.getItem('fb-token');
  }
  login(user:UserAuth): Observable<any>{
    user.returnSecureToken = true;
    localStorage.setItem('email',user.email);
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
      .pipe(
      tap(this.setToken),
        catchError(this.handleError.bind(this))
      );
  }
  logout(){
    this.setToken(null);
  }
  /*isAuthenticated(): boolean {
    return !!this.token
  }*/
  private handleError(error: HttpErrorResponse) {
    const {message} = error.error.error;
    switch(message){
      case 'INVALID_EMAIL':
        this.error$.next('Invalid email');
        break;
      case 'INVALID_PASSWORD':
        this.error$.next('Invalid password');
        break;
      case 'EMAIL_NOT_FOUND':
        this.error$.next('Email not found');
        break;
    }
    return throwError(error)
  }
  private setToken(response: FbAuthResponse | null){
    if(response){
      const expDate = new Date(new Date().getTime()+ +response.expiresIn * 1000);
      localStorage.setItem('fb-token',response.idToken);
      localStorage.setItem('fb-token-exp',expDate.toString());
    } else{
      localStorage.clear();
    }

  }
}
