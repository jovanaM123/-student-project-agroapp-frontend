import { TestBed } from '@angular/core/testing';

import { PoljoprService } from './poljopr.service';

describe('PoljoprService', () => {
  let service: PoljoprService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoljoprService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
