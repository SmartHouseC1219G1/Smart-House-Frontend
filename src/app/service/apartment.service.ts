import { Picture } from './../model/picture';
import { Host } from './../model/host';
import { Apartment } from './../model/apartment';
import { Observable} from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApartmentService {
  url = 'http://localhost:8080/api/apartment';
  constructor(private http: HttpClient) {}

  addNewApartment(apartment: Apartment) {
    return this.http.post(
      'http://localhost:8080/api/createApartment',
      apartment
    );
  }

  getApartmentById(id: number) {
    return this.http.get(`${this.url}/${id}`);
  }

  getApartmentByHost() {
    return this.http.get(`http://localhost:8080/api/listApartmentByHost`);
  }

  getAllApartment() {
    return this.http.get('http://localhost:8080/api/listApartment');
  }

  getDetailApartmentById(id: number) {
    return this.http.get(`http://localhost:8080/api/listApartment/${id}`);
  }

  updateApartmentPictures(id: number, pictures: Picture[]) {
    return this.http.put(
      `http://localhost:8080/api/update-apartment-pictures/${id}`,
      pictures
    );
  }

  searchApartment(
    bedroom: string,
    bathroom: string,
    // tslint:disable-next-line:variable-name
    province_id: string,
    startPrice: string,
    endPrice: string,
    startTime: string,
    endTime: string
  ) {
    return this.http.get(
      `http://localhost:8080/api/search-apartment?bedroom=${bedroom}&bathroom=${bathroom}&province_id=${province_id}&startPrice=${startPrice}&endPrice=${endPrice}&startTime=${startTime}&endTime=${endTime}`
    );
  }
}
