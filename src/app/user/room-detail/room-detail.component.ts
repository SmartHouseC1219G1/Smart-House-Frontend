import { PopupService } from './../../service/popup.service';
import Swal from 'sweetalert2';
import { OrderService } from 'src/app/service/order.service';
// tslint:disable-next-line:import-spacing
import { ApartmentService } from '../../service/apartment.service';
import { Res } from '../../model/res';
import { Component, OnInit } from '@angular/core';
import { Apartment } from '../../model/apartment';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/model/order';
/// <reference path="jquery/jquery.d.ts" />
@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.css'],
})
export class RoomDetailComponent implements OnInit {
  start: Date;
  end: Date;
  apartment: Apartment;
  constructor(
    private apartmentService: ApartmentService,
    private route: ActivatedRoute,
    private orderService: OrderService,
    private router: Router,
    private popupService: PopupService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.apartmentService.getDetailApartmentById(id).subscribe(
      (data: Res) => {
        this.apartment = data.data;
        console.log(this.apartment);
      },
      (error) => {
        console.log(error);
        this.apartment = null;
      }
    );
  }

  async createOrder() {
    console.log(this.start);
    console.log(this.end);
    const order: Order = {
      startTime: this.start,
      endTime: this.end,
      apartment: {
        id: this.apartment.id,
      },
    };
    console.log(order);
    this.orderService.createOrder(order).subscribe(
      (res: Res) => {
        console.log(res);
        if (res.status == 'SUCCESS') {
          this.popUpSuccess();
        }
        else this.popUpFailed();
      },
      (err) => {
        console.log(err);
        this.popUpFailed();
      }
    );
  }

  async popUpSuccess() {
    this.popupService.successTimeout(1000, 'Book success', 'Booking success');
  }

  popUpFailed() {
    this.popupService.failed('Book failed', 'Opp! Something wrong');
  }
}
