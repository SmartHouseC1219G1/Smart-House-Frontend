import { Host } from './../../model/host';
import { ApartmentService } from './../../service/apartment.service';
import { Apartment } from './../../model/apartment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-apartment',
  templateUrl: './list-apartment.component.html',
  styleUrls: ['./list-apartment.component.css'],
})
export class ListApartmentComponent implements OnInit {
  // Test
  host: Host;
  apartmentList: Apartment[] = [];
  constructor(private apartmentService: ApartmentService) {}

  ngOnInit(): void {
    this.host = {
      id: 1
    }
    this.apartmentService.getApartmentByHostId(1).subscribe(data => {
      this.apartmentList = data.data;
    })
  }
}
