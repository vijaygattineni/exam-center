import { TestBed, inject } from '@angular/core/testing';

import { AnonymousAccountService } from './anonymous-account.service';

describe('AnonymousAccountService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnonymousAccountService]
    });
  });

  it('should be created', inject([AnonymousAccountService], (service: AnonymousAccountService) => {
    expect(service).toBeTruthy();
  }));
});
