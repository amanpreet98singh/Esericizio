import { TestBed } from '@angular/core/testing';

import { DetailToEditserviceService } from './detail-to-editservice.service';

describe('DetailToEditserviceService', () => {
  let service: DetailToEditserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailToEditserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
