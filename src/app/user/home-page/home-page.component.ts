import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service';
import {Picture} from '../../model/picture';
import {Category} from '../../model/category';
import {Order} from '../../model/order';
import {Host} from '../../model/host';
import {Address} from '../../model/address';
import {RoomType} from '../../model/roomtype';
import {Apartment} from '../../model/apartment';
import {DatetimeService} from '../../service/datetime.service';
import {error} from '@angular/compiler/src/util';
import {Data} from '../../model/data';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  apartments: Data;
  p = 1;
  collection: Data;
  listApartment: Apartment[] = [];
  constructor(private userService: UserService, private date: DatetimeService) { }

  ngOnInit(): void {
    this.userService.listApartment1().subscribe(data => {
      this.apartments = data;
      this.collection = this.apartments;
    }, error1 => {
      console.log('co loi khi lay aparments');
    });
  }
  checkTime(value){
    this.date.checkDateTime(value);
  }
  checkInOut(dayIn, dayOut){
    this.date.checkInOut(dayIn, dayOut);
  }

}
