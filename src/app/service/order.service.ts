import { environment } from './../../environments/environment';
import { Order } from '../model/order';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StatusOrders } from '../model/status-order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  apiUrl = environment.API_URL;
  constructor(private http: HttpClient) { }
  blockOrder(order: Order){
    order.statusOrders = "BLOCK";
    return this.http.post(this.apiUrl + 'block-order', order);
  }

  getAllOrderOfHost(orderStatus) {
    return this.http.get(this.apiUrl + `findOrderByApartmentAndStatus?statusOrders=${orderStatus}`);
  }

  getAllOrderOfCustomer(){
    return this.http.get(this.apiUrl + `findAllOrderOfCustomer`);
  }

  checkInOrder(idOrder) {
    return this.http.put(this.apiUrl + `checkinOrderApartment/${idOrder}`, null);
  }

  confirmOrder(idOrder) {
    return this.http.put(this.apiUrl + `confirmOrderApartment/${idOrder}`, null);
  }

  cancelOrder(idOrder) {
    return this.http.put(this.apiUrl + `cancelOrderApartment/${idOrder}`, null);
  }

  cancelOrderByCustomer(idOrder) {
    return this.http.put(this.apiUrl + `cancelOrder/${idOrder}`, null);
  }

  createOrder(order: Order){
    return this.http.post(this.apiUrl + 'createOrders',order);
  }
}
