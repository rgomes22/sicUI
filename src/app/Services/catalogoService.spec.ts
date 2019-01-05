import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CatalogoService } from './catalogoService';

describe('ColecoesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CatalogoService],
    });
  });

  it('should be created', () => {
    const service: CatalogoService = TestBed.get(CatalogoService);
    expect(service).toBeTruthy();
  });
});
