import { TestBed } from '@angular/core/testing';

import { TvShowService } from './tv-shows.service';

describe('TvShowService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TvShowService = TestBed.get(TvShowService);
    expect(service).toBeTruthy();
  });
});
