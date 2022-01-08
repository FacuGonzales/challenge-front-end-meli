import { TestBed } from '@angular/core/testing';

import { BreadcrumbDataService } from './breadcrumb-data.service';

describe('BreadcrumbDataService', () => {
  let service: BreadcrumbDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BreadcrumbDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
