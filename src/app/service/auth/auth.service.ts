import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';


const helper = new JwtHelperService();
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private jwtHelper: JwtHelperService, private http: HttpClient) { }

  public isAuth(): boolean {
    const token = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    return !this.jwtHelper.isTokenExpired(token)
  }

  public signIn(loginPayload) {
    return this.http.post("http://localhost:8080/api/auth/signIn",loginPayload);
  }

  public getExpiationDate() {
    return helper.getTokenExpirationDate(this.getRawToken());
  }

  public decodePayload(){
    return helper.decodeToken(this.getRawToken());
  }

  public getRawToken(){
    return JSON.parse(window.localStorage.getItem("access_token")).accessToken;
  }

  
}
