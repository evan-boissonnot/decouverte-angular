import { TestBed } from '@angular/core/testing';

import { GetAllDirectorsService } from './get-all-directors.service';

describe('GetAllDirectorsService', () => {
  let service: GetAllDirectorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllDirectorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
