import { Order } from './../../../model/order';
import { Res } from './../../../model/res';
import { OrderService } from './../../../service/order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-renting',
  templateUrl: './list-renting.component.html',
  styleUrls: ['./list-renting.component.css'],
})
export class ListRentingComponent implements OnInit {
  listOrder: Order[];
  constructor(private orderService: OrderService) {
    orderService.getAllOrderOfHost('NOT_RENTED').subscribe((data: Res) => {
      this.listOrder = data.data;
    });
  }
  ngOnInit(): void {}
}
