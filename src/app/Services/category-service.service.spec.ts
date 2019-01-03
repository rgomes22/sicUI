import { TestBed , inject} from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CategoryServiceService } from './category-service.service';

describe('CategoryServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CategoryServiceService],
    });
  });

  it('should be created', () => {
    const service: CategoryServiceService = TestBed.get(CategoryServiceService);
    expect(service).toBeTruthy();
  });
/*
  it('should have getCategories function', 
    inject([CategoryServiceService],(service:CategoryServiceService) => {
    expect(service.getCategories).toBeTruthy();
  }));
  
  it('should have getCategoryById function', 
    inject([CategoryServiceService],(service:CategoryServiceService) => {
    expect(service.getCategoryById).toBeTruthy();
  }));

  it('should have delete function', 
  inject([CategoryServiceService],(service:CategoryServiceService) => {
  expect(service.delete).toBeTruthy();
}));

it('should have putCategoria function', 
inject([CategoryServiceService],(service:CategoryServiceService) => {
expect(service.putCategoria).toBeTruthy();
}));

it('should have postCategoria function', 
inject([CategoryServiceService],(service:CategoryServiceService) => {
expect(service.postCategoria).toBeTruthy();
}));*/

});
