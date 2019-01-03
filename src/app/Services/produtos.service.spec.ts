import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProdutosService } from './produtos.service';

describe('ProdutosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProdutosService],
    });
  });

  it('should be created', () => {
    const service: ProdutosService = TestBed.get(ProdutosService);
    expect(service).toBeTruthy();
  });
});
