import { User } from './../model/user';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const API_URL_ACCOUNT = 'http://localhost:8080/api/listApartment';
const API_URL_EDIT_ACCOUNT = 'http://localhost:8080/api/updateUser';
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  createAccount(signUpForm: User){
    return this.http.post("http://localhost:8080/api/auth/signUp",signUpForm);
  }

  getAccountById(id: number){
    return this.http.get(`http://localhost:8080/api/user/${id}`)
  }

  editAccount(body){
    return this.http.put("http://localhost:8080/api/user",body);
  }
}
