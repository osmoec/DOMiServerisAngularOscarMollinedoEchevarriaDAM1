import { TestBed } from '@angular/core/testing';

import { ServeiauxService } from './serveiaux.service';

describe('ServeiauxService', () => {
  let service: ServeiauxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServeiauxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
