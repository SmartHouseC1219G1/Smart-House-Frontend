import { Component, OnInit } from '@angular/core';
import {UserService} from '../service/user.service';
import {Apartment} from '../model/apartment';
import {Data} from '../model/data';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
   apartments: Data;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.listApartment1().subscribe(item => (this.apartments = item), error => {console.log('aaaa'); });
  }

}
