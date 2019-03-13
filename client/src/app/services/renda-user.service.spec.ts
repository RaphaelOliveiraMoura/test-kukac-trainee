import { TestBed } from '@angular/core/testing';

import { RendaUserService } from './renda-user.service';

describe('RendaUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RendaUserService = TestBed.get(RendaUserService);
    expect(service).toBeTruthy();
  });
});
