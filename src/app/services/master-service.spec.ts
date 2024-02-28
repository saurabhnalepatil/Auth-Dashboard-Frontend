import { TestBed } from '@angular/core/testing';

import { MasterServiceTsService } from './master-service';

describe('MasterServiceTsService', () => {
  let service: MasterServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MasterServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
