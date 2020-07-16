import { environment } from './../../environments/environment';
// @ts-ignore
import { User } from '../model/user';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
// @ts-ignore
import {User} from '../model/user';
import {FormControl} from '@angular/forms';

const API_URL = environment.API_URL;
const API_URL_ACCOUNT = API_URL +'listApartment';
const API_URL_EDIT_ACCOUNT = API_URL +'updateUser';
const API_GET_USER_INFO = API_URL +'getUser';
const API_CHANGE_PASSWORD = API_URL +'changePassword?oldPassword=${}&newPassWord=123459';
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  createAccount(signUpForm){
    return this.http.post(API_URL +"auth/signUp",signUpForm);
  }

  getAccountById(id: number){
    return this.http.get(API_URL + `user/${id}`);
  }

  editAccount(body){
    return this.http.put(API_URL_EDIT_ACCOUNT, body);
  }
  getUserByUsername(){
    return this.http.get(API_GET_USER_INFO);
  }

  changePassword(oldPassword: FormControl, newPassword: FormControl){
    return this.http.put(API_URL + `changePassword?oldPassword=${oldPassword}&newPassWord=${newPassword}`, null);
  }

}
