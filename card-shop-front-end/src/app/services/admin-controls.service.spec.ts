import { TestBed } from '@angular/core/testing';

import { AdminControlsService } from './admin-controls.service';

describe('AdminControlsService', () => {
  let service: AdminControlsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminControlsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
