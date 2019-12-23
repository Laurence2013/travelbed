import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IonItemSliding } from '@ionic/angular';

import { PlaceOffersService } from '../place-offers.service';
import { Place } from '../places.model';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  loadedPlaceOffers: Place[];

  constructor(private placeOffersService: PlaceOffersService, private router: Router){}
  ngOnInit(){
    this.loadedPlaceOffers = this.placeOffersService.placeOffers;
  }
  onEdit(placeId: string, slidingItem: IonItemSliding){
    slidingItem.close();
    this.router.navigate(['/', 'places', 'tabs', 'offers', 'edit', placeId]);
    console.log('Editing item', placeId);
  }
}
