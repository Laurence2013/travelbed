import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

import { Place } from '../../places.model';
import { PlacesService } from '../../places.service';
import { PlaceOffersService } from '../../place-offers.service';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
})
export class OfferBookingsPage implements OnInit {
  place: Place; 

  constructor(private route: ActivatedRoute, private navCtrl: NavController, private placesService: PlaceOffersService){}
  ngOnInit(){
    this.route.paramMap.subscribe(paramMap => {
      if(!paramMap.has('placeId')){
        this.navCtrl.navigateBack('/places/offers');
        return;
      }
      this.place = this.placesService.getPlaceOffers(paramMap.get('placeId'));
    });
  }
}
