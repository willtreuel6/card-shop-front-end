import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxdetailsComponent } from './boxdetails.component';

describe('BoxdetailsComponent', () => {
  let component: BoxdetailsComponent;
  let fixture: ComponentFixture<BoxdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
