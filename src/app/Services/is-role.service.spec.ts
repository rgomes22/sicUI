import { TestBed } from '@angular/core/testing';

import { IsRoleService } from './is-role.service';

describe('IsRoleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IsRoleService = TestBed.get(IsRoleService);
    expect(service).toBeTruthy();
  });
});
