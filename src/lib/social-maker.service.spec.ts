import { TestBed } from '@angular/core/testing';

import { SocialMakerLibService } from './social-maker-lib.service';

describe('SocialMakerLibService', () => {
  let service: SocialMakerLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocialMakerLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
