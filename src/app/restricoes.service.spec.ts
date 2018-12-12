import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RestricoesService } from './restricoes.service';

describe('RestricoesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RestricoesService],
    });
  });

  it('should be created', () => {
    const service: RestricoesService = TestBed.get(RestricoesService);
    expect(service).toBeTruthy();
  });
});
