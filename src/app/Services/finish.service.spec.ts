import { TestBed } from '@angular/core/testing';

import { FinishService } from './finish.service';

describe('FinishService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FinishService = TestBed.get(FinishService);
    expect(service).toBeTruthy();
  });
});
