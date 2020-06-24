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
    const token = this.getRawToken();
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
    return this.getAccessToken().token;
  }

  public getRole(){
    return this.getAccessToken().authorities[0].authority;
  }

  public isCustomer(): boolean{
    const authority = this.getRole();
    return (authority === "ROLE_CUSTOMER")
  }

  public isHost(): boolean{
    const authority = this.getRole();
    return (authority === "ROLE_HOST")
  }

  public isLogin(): boolean {
    const authority = this.getRole();
    return (authority === "ROLE_HOST" || authority === "ROLE_CUSTOMER" )
  }

  public getAccessToken(){
    return JSON.parse(window.localStorage.getItem("access_token"));
  }

  
}
