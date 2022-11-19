import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInventoryCardsComponent } from './admin-inventory-cards.component';

describe('AdminInventoryCardsComponent', () => {
  let component: AdminInventoryCardsComponent;
  let fixture: ComponentFixture<AdminInventoryCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminInventoryCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminInventoryCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
