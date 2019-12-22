import { Component, OnInit } from '@angular/core';

import { PlaceOffersService } from '../place-offers.service';
import { Place } from '../places.model';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  loadedPlaces: Place[];

  constructor(private placeOffersService: PlaceOffersService){}
  ngOnInit(){
    this.loadedPlaces = this.placeOffersService.placeOffers;
  }
}
