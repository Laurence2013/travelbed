import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

import { PlaceOffersService } from '../place-offers.service';
import { Place } from '../places.model';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  loadedPlaces: Place[];

  constructor(private placeOffersService: PlaceOffersService, private menuCtrl: MenuController){}
  ngOnInit(){
    this.loadedPlaces = this.placeOffersService.placeOffers;
  }
  onOpenMenu(){
    this.menuCtrl.toggle();
  }
}
