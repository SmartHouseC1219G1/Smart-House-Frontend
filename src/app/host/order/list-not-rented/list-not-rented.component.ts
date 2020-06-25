import { Res } from './../../../model/res';
import { Order } from './../../../model/order';
import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-list-not-rented',
  templateUrl: './list-not-rented.component.html',
  styleUrls: ['./list-not-rented.component.css'],
})
export class ListNotRentedComponent implements OnInit {
  listOrder: Order[];
  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.getAllOrderOfHost('PENDING').subscribe((data: Res) => {
      this.listOrder = data.data;
    });
    console.log(this.listOrder);
    
  }
}
