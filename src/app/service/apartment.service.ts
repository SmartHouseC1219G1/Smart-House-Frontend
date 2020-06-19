import { Apartment } from './../model/apartment';
import { Observable, ObservableLike } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {
  url = 'http://localhost:8080/api/apartment';
  constructor(private httpClient: HttpClient) {}

  addNewApartment(apartment: Apartment){
    return this.httpClient.post<Apartment>(this.url, apartment);
  }

  getApartmentById(id: number): Observable<Apartment>{
    return this.httpClient.get<Apartment>(`${this.url}/${id}`);
  }

}
