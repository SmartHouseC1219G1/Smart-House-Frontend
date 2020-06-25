import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const API_URL_ACCOUNT = 'http://localhost:8080/api/listApartment';
const API_URL_EDIT_ACCOUNT = 'http://localhost:8080/api/updateUser';
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient) { }

  getAccountById(id: number): Observable<any> {
    return this.httpClient.get<any>(`${API_URL_ACCOUNT}/${id}`);
  }

  createAccount(account: Account): Observable<Account> {
    return this.httpClient.post<Account>(API_URL_ACCOUNT, account);
  }

  editAccount(account: Account): Observable<Account> {
    return this.httpClient.put<Account>(`${API_URL_EDIT_ACCOUNT}/${account.id}`, account);
  }

}
