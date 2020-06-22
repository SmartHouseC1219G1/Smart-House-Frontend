import { Res } from './../../model/res';
import { GetListService } from './../../service/get-list.service';
import { Province } from './../../model/province';
import { ApartmentService } from './../../service/apartment.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Picture } from '../../model/picture';
import { Category } from '../../model/category';
import { Order } from '../../model/order';
import { Host } from '../../model/host';
import { Address } from '../../model/address';
import { RoomType } from '../../model/roomtype';
import { Apartment } from '../../model/apartment';
import { DatetimeService } from '../../service/datetime.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  apartments: Data;
  p = 1;
  collection: Data;
  listApartment: Apartment[] = [];

  // param for search
  bedroom: string;
  bathroom: string;
  province_id: string;
  startPrice: string;
  endPrice: string;
  startTime: string;
  endTime: string;
  // get list
  provinces: Province[] = [];
  constructor(
    private userService: UserService,
    private date: DatetimeService,
    private apartmentService: ApartmentService,
    private getListService: GetListService
  ) {}

  ngOnInit(): void {
    this.getListService.getProvinceList().subscribe((data: Res) => {
      this.provinces = data.data;
    });
  }
  checkTime(value) {
    this.date.checkDateTime(value);
  }
  checkInOut(dayIn, dayOut) {
    this.date.checkInOut(dayIn, dayOut);
  }
  onSearch() {
    this.apartmentService
      .searchApartment(
        this.bedroom,
        this.bathroom,
        this.province_id,
        this.startPrice,
        this.endPrice,
        this.startTime,
        this.endTime
      )
      .subscribe((data: Res) => {
        console.log(data.data)
        this.listApartment = data.data;
      });
  }
  check(num: number) {
    if (num % 2 == 0) {
      let nextNum = num / 2;
      if (nextNum % 2 == 0) {
        return true;
      } else {
        return false;
      }
    } else {
      let nextNum = (num - 1) / 2;
      if (nextNum % 2 == 0) {
        return true;
      } else {
        return false;
      }
    }
  }
}
