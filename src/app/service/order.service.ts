import { Order } from './../model/order';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StatusOrders } from '../model/status-order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }
  
  blockOrder(order: Order){
    order.statusOrders = StatusOrders.BLOCK;
    return this.http.post('http://localhost:8080/api/block-order',order);
  }
}
