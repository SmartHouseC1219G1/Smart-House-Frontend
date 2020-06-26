import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  getCommentListByApartmentId(apartmentId: number){
    return this.http.get(`http://localhost:8080/api/listComment/${apartmentId}`);
  }
}
