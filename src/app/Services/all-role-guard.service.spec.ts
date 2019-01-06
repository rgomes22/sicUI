import { TestBed } from '@angular/core/testing';

import { AllRoleGuardService } from './all-role-guard.service';

describe('AllRoleGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllRoleGuardService = TestBed.get(AllRoleGuardService);
    expect(service).toBeTruthy();
  });
});
