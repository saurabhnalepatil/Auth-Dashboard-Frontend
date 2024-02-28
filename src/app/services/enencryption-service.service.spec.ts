import { TestBed } from '@angular/core/testing';

import { EnencryptionServiceService } from './enencryption-service.service';

describe('EnencryptionServiceService', () => {
  let service: EnencryptionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnencryptionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
