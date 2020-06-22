import { Picture } from '../model/picture';
import { Apartment } from '../model/apartment';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApartmentService {
  url = 'http://localhost:8080/api/apartment';
  addUrl = 'http://localhost:8080/api/createApartment';
  constructor(private http: HttpClient) {}

  addNewApartment(apartment: Apartment) {
    // const headers = {
    //   'Content-type': "application/x-www-form-urlencoded"
    // }
    return this.http.post(this.addUrl, apartment);
  }

  getApartmentById(id: number) {
    return this.http.get(`${this.url}/${id}`);
  }

  getApartmentByHostId(hostId: number) {
    return this.http.get(
      `http://localhost:8080/api/host/apartment?id=${hostId}`
    );
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
    province_id: string,
    startPrice: string,
    endPrice: string,
    startTime: string,
    endTime: string
  ) {
    return this.http.get(`http://localhost:8080/api/search-apartment?bedroom=${bedroom}&bathroom=${bathroom}&province_id=${province_id}
    &startPrice=${startPrice}&endPrice=${endPrice}&startTime=${startTime}&endTime=${endTime}`);
  }
}
