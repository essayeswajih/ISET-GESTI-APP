import { TestBed } from '@angular/core/testing';

import { ProfessorsServiceService } from './professors-service.service';

describe('ProfessorsServiceService', () => {
  let service: ProfessorsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfessorsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
