import { TestBed ,inject} from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MateriaisService } from './materiais.service';

describe('MateriaisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MateriaisService],
    });
  });

  it('should be created', () => {
    const service: MateriaisService = TestBed.get(MateriaisService);
    expect(service).toBeTruthy();
  });

  it('should have getMateriais function', 
    inject([MateriaisService],(service:MateriaisService) => {
    expect(service.getMateriais).toBeTruthy();
  }));

  it('should have createMaterial function', 
    inject([MateriaisService],(service:MateriaisService) => {
    expect(service.createMaterial).toBeTruthy();
  }));
});
