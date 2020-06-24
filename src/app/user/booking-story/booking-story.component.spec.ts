import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingStoryComponent } from './booking-story.component';

describe('BookingStoryComponent', () => {
  let component: BookingStoryComponent;
  let fixture: ComponentFixture<BookingStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
