import { Res } from './../../../model/res';
import { Order } from './../../../model/order';
import { OrderService } from './../../../service/order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-rented',
  templateUrl: './list-rented.component.html',
  styleUrls: ['./list-rented.component.css'],
})
export class ListRentedComponent implements OnInit {
  listOrder: Order[];
  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.getAllOrderOfHost('RENTED').subscribe((data: Res) => {
      this.listOrder = data.data;
    });
  }
}
