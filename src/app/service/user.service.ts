import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Apartment} from '../model/apartment';
import {Data} from '../model/data';
import {ViewDetail} from '../model/view-detail';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  urlList = environment.API_URL + 'listApartment';
  // urlListPriceUp = 'http://localhost:8080/api/listApartment';
  urlListById = environment.API_URL + 'listApartment';
  constructor(private httpClient: HttpClient) { }
  // listPrice(count = 3): Observable<Apartment[]> {
  //   return this.httpClient.get<Apartment[]>(this.urlListPriceUp).pipe(map(response => response.filter((post, i) => i < count)));
  // }
  listApartment(): Observable<Apartment[]> {
    return this.httpClient.get<Apartment[]>(this.urlList);
  }
  listApartment1(): Observable<Data> {
    return this.httpClient.get<Data>(this.urlList);
  }
  getApartmentById(id: number): Observable<ViewDetail> {
    return this.httpClient.get<ViewDetail>(`${this.urlListById}/${id}`);
  }
}
