import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRentedComponent } from './list-rented.component';

describe('ListRentedComponent', () => {
  let component: ListRentedComponent;
  let fixture: ComponentFixture<ListRentedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRentedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRentedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
