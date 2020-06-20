import { Apartment } from './../model/apartment';
import { Observable, ObservableLike } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {
  url = 'http://localhost:8080/api/apartment';
  addUrl = 'http://localhost:8080/api/createApartment';
  constructor(private http: HttpClient) {}

  addNewApartment(apartment: Apartment){
    // const headers = {
    //   'Content-type': "application/x-www-form-urlencoded"
    // }
    return this.http.post(this.addUrl, apartment);
  }

  getApartmentById(id: number) {
    return this.http.get(`${this.url}/${id}`);
  }

}
