import { Res } from '../../model/res';
import { Apartment } from '../../model/apartment';
import { ApartmentService } from '../../service/apartment.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css'],
})
export class ExploreComponent implements OnInit {
  apartmentList: Apartment[];
  constructor(private apartmentService: ApartmentService) {}

  ngOnInit(): void {
    this.apartmentService.getAllApartment().subscribe(
      (data: Res) => {
        this.apartmentList = data.data;
        console.log(this.apartmentList);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  check(num: number) {
    // tslint:disable-next-line:triple-equals
    if (num % 2 == 0) {
      const nextNum = num / 2;

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
