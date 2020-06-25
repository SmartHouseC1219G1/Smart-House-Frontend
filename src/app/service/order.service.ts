import { Order } from '../model/order';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StatusOrders } from '../model/status-order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }
  blockOrder(order: Order){
    order.statusOrders = "BLOCK";
    return this.http.post('http://localhost:8080/api/block-order', order);
  }

  getAllOrderOfHost(orderStatus) {
    return this.http.get(`http://localhost:8080/api/findOrderByApartmentAndStatus?statusOrders=${orderStatus}`);
  }

  getAllOrderOfCustomer(){
    return this.http.get(`http://localhost:8080/api/findAllOrderOfCustomer`);
  }

  checkInOrder(idOrder) {
    return this.http.put(`http://localhost:8080/api/checkinOrderApartment/${idOrder}`, null);
  }

  confirmOrder(idOrder) {
    return this.http.put(`http://localhost:8080/api/confirmOrderApartment/${idOrder}`, null);
  }

  cancelOrder(idOrder) {
    return this.http.put(`http://localhost:8080/api/cancelOrderApartment/${idOrder}`, null);
  }

  cancelOrderByCustomer(idOrder) {
    return this.http.put(`http://localhost:8080/api/cancelOrder/${idOrder}`, null);
  }

  createOrder(order: Order){
    return this.http.post('http://localhost:8080/api/createOrders',order);
  }
}
