import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxInventoryComponent } from './box-inventory.component';

describe('BoxInventoryComponent', () => {
  let component: BoxInventoryComponent;
  let fixture: ComponentFixture<BoxInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxInventoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
