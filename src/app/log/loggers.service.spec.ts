import { TestBed } from '@angular/core/testing';

import { LoggersService } from './loggers.service';

describe('LoggersService', () => {
  let service: LoggersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
