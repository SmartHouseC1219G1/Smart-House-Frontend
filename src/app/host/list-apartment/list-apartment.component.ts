import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-apartment',
  templateUrl: './list-apartment.component.html',
  styleUrls: ['./list-apartment.component.css'],
})
export class ListApartmentComponent implements OnInit {
  // Test
  messages = [
    {
      from: 'abcasd',
      subject: 'asdasds',
      content: 'asdasd',
    }, {
      from: 'abcasd',
      subject: 'asdasds',
      content: 'asdasd',
    }, {
      from: 'abcasd',
      subject: 'asdasds',
      content: 'asdasd',
    }, {
      from: 'abcasd',
      subject: 'asdasds',
      content: 'asdasd',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
