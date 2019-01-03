import { TestBed,inject } from '@angular/core/testing';

import { FinishService } from './finish.service';

describe('FinishService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FinishService = TestBed.get(FinishService);
    expect(service).toBeTruthy();
  });

/*  it('should have getAcabamentos function', 
  inject([FinishService],(service:FinishService) => {
  expect(service.getAcabamentos).toBeTruthy();
}));

it('should have putFinish function', 
inject([FinishService],(service:FinishService) => {
expect(service.putFinish).toBeTruthy();
}));

it('should have delete function', 
inject([FinishService],(service:FinishService) => {
expect(service.delete).toBeTruthy();
}));

it('should have postFinish function', 
inject([FinishService],(service:FinishService) => {
expect(service.postFinish).toBeTruthy();
}));*/
});
