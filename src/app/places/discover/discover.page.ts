import { Component, OnInit } from '@angular/core';

import { MenuController } from '@ionic/angular';
import { SegmentChangeEventDetail } from '@ionic/core';

import { PlaceOffersService } from '../place-offers.service';
import { Place } from '../places.model';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  loadedPlaces: Place[];
  listedLoadedPlaces: Place[];

  constructor(private placeOffersService: PlaceOffersService, private menuCtrl: MenuController){}
  ngOnInit(){
    this.loadedPlaces = this.placeOffersService.placeOffers;
    this.listedLoadedPlaces = this.loadedPlaces.slice(1);
  }
  onOpenMenu(){
    this.menuCtrl.toggle();
  }
  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>){
    console.log(event.detail);
  }
}
