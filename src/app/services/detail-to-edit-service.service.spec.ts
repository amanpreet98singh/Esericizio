import { TestBed } from '@angular/core/testing';

import { DetailToEditServiceService } from './detail-to-edit-service.service';

describe('DetailToEditServiceService', () => {
  let service: DetailToEditServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailToEditServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
