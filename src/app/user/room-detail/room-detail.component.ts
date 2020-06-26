import { CommentDto } from './../../model/dto/commentDto';
import { CommentService } from './../../service/comment.service';
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
  commentList: CommentDto[];
  inputComment: string;
  constructor(
    private apartmentService: ApartmentService,
    private route: ActivatedRoute,
    private orderService: OrderService,
    private router: Router,
    private popupService: PopupService,
    private commentService: CommentService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.apartmentService.getDetailApartmentById(id).subscribe(
      (data: Res) => {
        this.apartment = data.data;
        console.log(this.apartment);
        this.commentService
          .getCommentListByApartmentId(this.apartment.id)
          .subscribe((data: Res) => {
            this.commentList = data.data;
          });
      },
      (error) => {
        console.log(error);
        this.apartment = null;
      }
    );
  }

  async createOrder() {
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
        } else this.popUpFailed();
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

  onComment() {
    this.commentService
      .addComment(this.apartment.id, this.inputComment)
      .subscribe(
        (data: Res) => {
          if (data.status == 'SUCCESS') {
            console.log(data.data);
            this.commentList.push(data.data);
          } else {
            this.popupService.failed('Comment Failed', 'Opp! Something wrong');
          }
        },
        (err) => {
          console.log(err);
          this.popupService.failed('Comment Failed', 'Opp! Something wrong')
        }
      );
  }
}
