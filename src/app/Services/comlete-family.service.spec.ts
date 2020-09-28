import { TestBed } from '@angular/core/testing';

import { ComleteFamilyService } from './comlete-family.service';

describe('ComleteFamilyService', () => {
  let service: ComleteFamilyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComleteFamilyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
