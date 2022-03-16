import { TestBed } from '@angular/core/testing';

import { ResearchEntityService } from './research-entity.service';

describe('ResearchEntityService', () => {
  let service: ResearchEntityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResearchEntityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
