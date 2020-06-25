// @ts-ignore
import { User } from '../model/user';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
// @ts-ignore
import {User} from '../model/user';
import {FormControl} from '@angular/forms';

const API_URL_ACCOUNT = 'http://localhost:8080/api/listApartment';
const API_URL_EDIT_ACCOUNT = 'http://localhost:8080/api/updateUser';
const API_GET_USER_INFO = 'http://localhost:8080/api/getUser';
const API_CHANGE_PASSWORD = 'http://localhost:8080/api/changePassword?oldPassword=${}&newPassWord=123459';
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  createAccount(signUpForm){
    return this.http.post("http://localhost:8080/api/auth/signUp",signUpForm);
  }

  getAccountById(id: number){
    return this.http.get(`http://localhost:8080/api/user/${id}`);
  }

  editAccount(body){
    return this.http.put(API_URL_EDIT_ACCOUNT, body);
  }
  getUserByUsername(){
    return this.http.get(API_GET_USER_INFO);
  }

  changePassword(oldPassword: FormControl, newPassword: FormControl){
    return this.http.put(`http://localhost:8080/api/changePassword?oldPassword=${oldPassword}&newPassWord=${newPassword}`, null);
  }

}
