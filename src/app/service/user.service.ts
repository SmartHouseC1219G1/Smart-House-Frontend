import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Apartment} from '../model/apartment';
import {Data} from '../model/data';
import {ViewDetail} from '../model/view-detail';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  urlList = 'http://localhost:8080/api/listApartment';
  // urlListPriceUp = 'http://localhost:8080/api/listApartment';
  urlListById = 'http://localhost:8080/api/listApartment';
  constructor(private httpClient: HttpClient) { }
  // listPrice(count = 3): Observable<Apartment[]> {
  //   return this.httpClient.get<Apartment[]>(this.urlListPriceUp).pipe(map(response => response.filter((post, i) => i < count)));
  // }
  listApartment(): Observable<Apartment[]> {
    return this.httpClient.get<Apartment[]>('http://localhost:8080/api/listApartment');
  }
  listApartment1(): Observable<Data> {
    return this.httpClient.get<Data>(this.urlList);
  }
  getApartmentById(id: number): Observable<ViewDetail> {
    return this.httpClient.get<ViewDetail>(`${this.urlListById}/${id}`);
  }
}
