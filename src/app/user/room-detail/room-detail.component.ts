import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service';
import {ActivatedRoute} from '@angular/router';
import {ViewDetail} from '../../model/view-detail';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.css']
})
export class RoomDetailComponent implements OnInit {
   apartment: ViewDetail;
  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.userService.getApartmentById(id).subscribe(
      next => {
        this.apartment = next;
        console.log(this.apartment.data);
      },
      error => {
        console.log(error);
        this.apartment = null;
      }
    );
  }

}
