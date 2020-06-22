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
import {Province} from '../../model/province';
import {ApartmentService} from '../../service/apartment.service';
import {GetListService} from '../../service/get-list.service';
import {Res} from '../../model/res';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  listApartment: Apartment[] = [];

  // param for search
  bedroom: string;
  bathroom: string;
  // tslint:disable-next-line:variable-name
  province_id: string;
  startPrice: string;
  endPrice: string;
  startTime: string;
  endTime: string;
  // get list
  provinces: Province[] = [];
  // @ts-ignore
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
    // tslint:disable-next-line:triple-equals
    if (num % 2 == 0) {
      const nextNum = num / 2;
      // tslint:disable-next-line:triple-equals
      if (nextNum % 2 == 0) {
        return true;
      } else {
        return false;
      }
    } else {
      const nextNum = (num - 1) / 2;
      // tslint:disable-next-line:triple-equals
      if (nextNum % 2 == 0) {
        return true;
      } else {
        return false;
      }
    }
  }
}
