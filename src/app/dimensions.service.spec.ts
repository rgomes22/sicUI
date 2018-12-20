import { TestBed ,inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DimensionsService } from './dimensions.service';

describe('DimensionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DimensionsService],
    });
  });

  it('should be created', () => {
    const service: DimensionsService = TestBed.get(DimensionsService);
    expect(service).toBeTruthy();
  });

  it('should have getDiscDim function', 
    inject([DimensionsService],(service:DimensionsService) => {
    expect(service.getDiscDim).toBeTruthy();
  }));

  it('should have getContDim function', 
    inject([DimensionsService],(service:DimensionsService) => {
    expect(service.getContDim).toBeTruthy();
  }));

  it('should have deleteContDim function', 
    inject([DimensionsService],(service:DimensionsService) => {
    expect(service.deleteContDim).toBeTruthy();
  }));

  
  it('should have deleteDiscDim function', 
    inject([DimensionsService],(service:DimensionsService) => {
    expect(service.deleteDiscDim).toBeTruthy();
  }));

  it('should have putContDim function', 
    inject([DimensionsService],(service:DimensionsService) => {
    expect(service.putContDim).toBeTruthy();
  }));

  it('should have postDiscDim function', 
    inject([DimensionsService],(service:DimensionsService) => {
    expect(service.postDiscDim).toBeTruthy();
  }));

  it('should have postContDim function', 
    inject([DimensionsService],(service:DimensionsService) => {
    expect(service.postContDim).toBeTruthy();
  }));

  it('should have putDiscDim function', 
    inject([DimensionsService],(service:DimensionsService) => {
    expect(service.putDiscDim).toBeTruthy();
  }));

  it('should have getProductContDim function', 
    inject([DimensionsService],(service:DimensionsService) => {
    expect(service.getProductContDim).toBeTruthy();
  }));

  it('should have getProductDiscDim function', 
    inject([DimensionsService],(service:DimensionsService) => {
    expect(service.getProductDiscDim).toBeTruthy();
  }));
});
