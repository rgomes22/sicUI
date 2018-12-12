import { TestBed , inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EncomendaService } from './encomenda.service';

describe('EncomendaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EncomendaService],
    });
  });

  it('should be created', () => {
    const service: EncomendaService = TestBed.get(EncomendaService);
    expect(service).toBeTruthy();
  });

  it('should have getEncomendas function', 
    inject([EncomendaService],(service:EncomendaService) => {
    expect(service.getEncomendas).toBeTruthy();
  }));
  
  it('should have deleteEncomenda function', 
    inject([EncomendaService],(service:EncomendaService) => {
    expect(service.deleteEncomenda).toBeTruthy();
  }));

  it('should have createEncomenda function', 
    inject([EncomendaService],(service:EncomendaService) => {
    expect(service.createEncomenda).toBeTruthy();
  }));
  
});
