import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service';
import {Picture} from '../../model/picture';
import {Status} from '../../model/status';
import {Category} from '../../model/category';
import {Order} from '../../model/order';
import {Host} from '../../model/host';
import {Address} from '../../model/address';
import {RoomType} from '../../model/roomtype';
import {Apartment} from '../../model/apartment';
import {DatetimeService} from '../../service/datetime.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  apartments: Apartment[] = [];
  listApartment: Apartment[] = [];
  constructor(private userService: UserService, private date: DatetimeService) { }

  ngOnInit(): void {
    this.userService.listApartment().subscribe( item => (this.apartments = item), error => {alert('error'); });
  }
  checkTime(value){
    this.date.checkDateTime(value);
  }
  checkInOut(dayIn, dayOut){
    this.date.checkInOut(dayIn, dayOut);
  }

}
