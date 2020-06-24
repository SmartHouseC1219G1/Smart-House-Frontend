import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNotRentedComponent } from './list-not-rented.component';

describe('ListNotRentedComponent', () => {
  let component: ListNotRentedComponent;
  let fixture: ComponentFixture<ListNotRentedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNotRentedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNotRentedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
