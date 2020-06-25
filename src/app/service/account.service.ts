import { User } from './../model/user';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const API_URL_ACCOUNT = 'http://localhost:8080/api/listApartment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  createAccount(signUpForm: User){
    return this.http.post("http://localhost:8080/api/auth/signUp",signUpForm);
  }
}
