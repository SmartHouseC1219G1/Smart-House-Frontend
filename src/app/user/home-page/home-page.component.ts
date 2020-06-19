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

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  apartments: Apartment[] = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.listApartment().subscribe( item => (this.apartments = item), error => {alert('error'); });
  }

}
