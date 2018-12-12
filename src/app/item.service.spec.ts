import { TestBed ,inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ItemService } from './item.service';

describe('ItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ItemService],
    });
  });

  it('should be created', () => {
    const service: ItemService = TestBed.get(ItemService);
    expect(service).toBeTruthy();
  });

  it('should have getItens function', 
    inject([ItemService],(service:ItemService) => {
    expect(service.getItens).toBeTruthy();
  }));

  it('should have deleteItem function', 
    inject([ItemService],(service:ItemService) => {
    expect(service.deleteItem).toBeTruthy();
  }));

  it('should have getItem function', 
    inject([ItemService],(service:ItemService) => {
    expect(service.getItem).toBeTruthy();
  }));

  it('should have createChild function', 
    inject([ItemService],(service:ItemService) => {
    expect(service.createChild).toBeTruthy();
  }));

  it('should have createParent function', 
    inject([ItemService],(service:ItemService) => {
    expect(service.createParent).toBeTruthy();
  }));

  it('should have editParentItem function', 
    inject([ItemService],(service:ItemService) => {
    expect(service.editParentItem).toBeTruthy();
  }));

  it('should have editChildItem function', 
    inject([ItemService],(service:ItemService) => {
    expect(service.editChildItem).toBeTruthy();
  }));

  it('should have removeItem function', 
    inject([ItemService],(service:ItemService) => {
    expect(service.removeItem).toBeTruthy();
  }));
  
});
