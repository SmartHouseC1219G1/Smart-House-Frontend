// tslint:disable-next-line:import-spacing
import { ApartmentService } from  '../../service/apartment.service';
import { Res } from '../../model/res';
import { Component, OnInit } from '@angular/core';
import { Apartment } from '../../model/apartment';
import { UserService } from '../../service/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.css'],
})
export class RoomDetailComponent implements OnInit {
  apartment: Apartment;
  constructor(
    private apartmentService: ApartmentService,
    private route: ActivatedRoute
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

}
