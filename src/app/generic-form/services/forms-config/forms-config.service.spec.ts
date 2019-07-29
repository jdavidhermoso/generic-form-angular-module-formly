import { TestBed } from '@angular/core/testing';

import { FormsConfigService } from './forms-config.service';

describe('FormsConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormsConfigService = TestBed.get(FormsConfigService);
    expect(service).toBeTruthy();
  });
});
