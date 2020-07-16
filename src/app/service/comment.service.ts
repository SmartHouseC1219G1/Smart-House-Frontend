import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  apiUrl = environment.API_URL;
  constructor(private http: HttpClient) { }

  getCommentListByApartmentId(apartmentId: number){
    return this.http.get(this.apiUrl + `listComment/${apartmentId}`);
  }

  addComment(apartmentId: number,comment: string){
    return this.http.post(this.apiUrl + `addComment/${apartmentId}?comment=${comment}`,null)
  }
}
