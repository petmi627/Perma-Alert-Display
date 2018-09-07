import { TestBed, inject } from '@angular/core/testing';

import { DutylistService } from './dutylist.service';

describe('DutylistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DutylistService]
    });
  });

  it('should be created', inject([DutylistService], (service: DutylistService) => {
    expect(service).toBeTruthy();
  }));
});
