import { Res } from './../../model/res';
import { ApartmentService } from './../../service/apartment.service';
import { ActivatedRoute } from '@angular/router';
import { Apartment } from './../../model/apartment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apartment-detail',
  templateUrl: './apartment-detail.component.html',
  styleUrls: ['./apartment-detail.component.css']
})
export class ApartmentDetailComponent implements OnInit {

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
        console.log(this.apartment)
      },
      (error) => {
        console.log(error);
        this.apartment = null;
      }
    );
  }

}
