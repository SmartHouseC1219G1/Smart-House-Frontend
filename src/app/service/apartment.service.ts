import { environment } from './../../environments/environment';
import { Picture } from '../model/picture';
import { Apartment } from '../model/apartment';
import { Observable} from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApartmentService {
  apiUrl = environment.API_URL;
  constructor(private http: HttpClient) {}

  addNewApartment(apartment: Apartment) {
    return this.http.post(
      this.apiUrl + 'createApartment',
      apartment
    );
  }

  getApartmentById(id: number) {
    return this.http.get(`${this.apiUrl}apartment/${id}`);
  }

  getApartmentByHost() {
    return this.http.get(this.apiUrl + `listApartmentByHost`);
  }

  getAllApartment() {
    return this.http.get(this.apiUrl + 'listApartment');
  }

  getDetailApartmentById(id: number) {
    return this.http.get(this.apiUrl + `listApartment/${id}`);
  }

  updateApartmentPictures(id: number, pictures: Picture[]) {
    return this.http.put(
      this.apiUrl + `update-apartment-pictures/${id}`,
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
      this.apiUrl + `search-apartment?bedroom=${bedroom}&bathroom=${bathroom}&province_id=${province_id}&startPrice=${startPrice}&endPrice=${endPrice}&startTime=${startTime}&endTime=${endTime}`
    );
  }
}
