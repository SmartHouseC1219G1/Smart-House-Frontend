import { Component, OnInit } from '@angular/core';
import {Apartment} from '../../model/apartment';
import {UserService} from '../../service/user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.css']
})
export class RoomDetailComponent implements OnInit {
   apartment: Apartment;
  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getApartmentById(id).subscribe(
      next => (this.apartment = next),
      error => {
        console.log(error);
        this.apartment = null;
      }
    );
  }

}
