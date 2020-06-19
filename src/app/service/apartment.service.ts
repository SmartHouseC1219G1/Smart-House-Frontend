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
    return this.httpClient.post(this.url, apartment);
  }

  getApartmentById(id: number) {
    return this.httpClient.get(`${this.url}/${id}`);
  }

}
