import { TestBed, inject } from '@angular/core/testing';

import { CisService } from './cis.service';

describe('CisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CisService]
    });
  });

  it('should be created', inject([CisService], (service: CisService) => {
    expect(service).toBeTruthy();
  }));
});
