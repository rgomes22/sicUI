import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialFinishService } from './material-finish.service';

describe('MaterialFinishService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MaterialFinishService],
    });
  });

  it('should be created', () => {
    const service: MaterialFinishService = TestBed.get(MaterialFinishService);
    expect(service).toBeTruthy();
  });
});
