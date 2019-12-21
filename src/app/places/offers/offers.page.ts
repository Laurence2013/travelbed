import { Component, OnInit } from '@angular/core';

import { PlaceOffersService } from '../place-offers.service';
import { Place } from '../places.model';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  loadedPlaceOffers: Place[];

  constructor(private placeOffersService: PlaceOffersService){}
  ngOnInit(){
    this.loadedPlaceOffers = this.placeOffersService.placeOffers;
  }
}
