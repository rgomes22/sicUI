import { TestBed } from '@angular/core/testing';

import { ApiUsersConfigService } from './api-users-config.service';

describe('ApiUsersConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiUsersConfigService = TestBed.get(ApiUsersConfigService);
    expect(service).toBeTruthy();
  });
});
