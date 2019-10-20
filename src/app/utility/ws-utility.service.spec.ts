import { TestBed } from '@angular/core/testing';

import { WsUtilityService } from './ws-utility.service';

describe('WsUtilityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WsUtilityService = TestBed.get(WsUtilityService);
    expect(service).toBeTruthy();
  });
});
