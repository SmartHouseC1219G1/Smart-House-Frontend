import { PopupService } from './../../service/popup.service';
import { Res } from './../../model/res';
import { Order } from './../../model/order';
import { OrderService } from 'src/app/service/order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit {
  orderList: Order[];
  constructor(private orderService: OrderService,private popup: PopupService) { }

  ngOnInit(): void {
    this.orderService.getAllOrderOfCustomer().subscribe((data: Res) => {
      this.orderList = data.data;
    } )
  }
  cancelOrder(id,index){
    this.orderService.cancelOrderByCustomer(id).subscribe((data: Res) => {
      if(data.status == "SUCCESS") {
        this.popup.successTimeout(600,'Cancel success','This order was been canceled')
        this.orderList[index].statusOrders = "CANCEL";
        console.log(this.orderList);
      } else {
        this.popup.failed("Failed","Opp! Wrong")
      }
    },err => this.popup.failed("Failed","Opp! Wrong"))
  }
}
