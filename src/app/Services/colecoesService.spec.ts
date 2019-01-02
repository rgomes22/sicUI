import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ColecoesService } from './colecoesService';

describe('ColecoesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ColecoesService],
    });
  });

  it('should be created', () => {
    const service: ColecoesService = TestBed.get(ColecoesService);
    expect(service).toBeTruthy();
  });
});
