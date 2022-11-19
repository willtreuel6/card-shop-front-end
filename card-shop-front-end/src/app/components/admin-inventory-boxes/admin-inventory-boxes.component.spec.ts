import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInventoryBoxesComponent } from './admin-inventory-boxes.component';

describe('AdminInventoryBoxesComponent', () => {
  let component: AdminInventoryBoxesComponent;
  let fixture: ComponentFixture<AdminInventoryBoxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminInventoryBoxesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminInventoryBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
