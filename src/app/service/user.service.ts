import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Apartment} from '../model/apartment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  urlList = 'http://localhost:8080/api/listApartment';
  urlListById = 'http://localhost:8080/api/listApartment';
  constructor(private httpClient: HttpClient) { }
  listApartment(count = 10): Observable<Apartment[]> {
    return this.httpClient.get<Apartment[]>(this.urlList).pipe(map(response => response.filter((post, i) => i < count)));
  }
  getApartmentById(id: number): Observable<Apartment> {
    return this.httpClient.get<Apartment>(`${this.urlListById}/${id}`);
  }
}
