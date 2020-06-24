import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRentingComponent } from './list-renting.component';

describe('ListRentingComponent', () => {
  let component: ListRentingComponent;
  let fixture: ComponentFixture<ListRentingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRentingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRentingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
