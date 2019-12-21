import { TestBed } from '@angular/core/testing';

import { PlaceOffersService } from './place-offers.service';

describe('PlaceOffersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlaceOffersService = TestBed.get(PlaceOffersService);
    expect(service).toBeTruthy();
  });
});
