import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetListService {
  apiUrl = environment.API_URL;
  categoryUrl = this.apiUrl + 'category';
  roomTypeUrl = this.apiUrl + 'room-type';
  provinceUrl = this.apiUrl + 'province';

  constructor(private http: HttpClient) { }

  getCategoryList(): Observable<any> {
    return this.http.get(this.categoryUrl);
  }

  getRoomTypeList(): Observable<any>{
    return this.http.get(this.roomTypeUrl);
  }

  getProvinceList(): Observable<any>{
    return this.http.get(this.provinceUrl);
  }

}
