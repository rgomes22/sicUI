import { TestBed } from '@angular/core/testing';

import { RestricoesService } from './restricoes.service';

describe('RestricoesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestricoesService = TestBed.get(RestricoesService);
    expect(service).toBeTruthy();
  });
});
