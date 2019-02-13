import { TestBed, inject } from '@angular/core/testing';

import { InfocriseService } from './infocrise.service';

describe('InfocriseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InfocriseService]
    });
  });

  it('should be created', inject([InfocriseService], (service: InfocriseService) => {
    expect(service).toBeTruthy();
  }));
});
