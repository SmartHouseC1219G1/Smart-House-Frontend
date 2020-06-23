import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const API_URL_ACCOUNT = 'http://localhost:8080/api/listApartment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient) { }

  createAccount(acount: Account): Observable<Account> {
    return this.httpClient.post<Account>(API_URL_ACCOUNT, acount);
  }

}
