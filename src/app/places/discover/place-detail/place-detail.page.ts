import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import { Place } from '../../places.model';
import { PlaceOffersService } from '../../place-offers.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place: Place;

  constructor(private route: ActivatedRoute, private navCtrl: NavController, private placeOffersService: PlaceOffersService){}
  ngOnInit(){
    this.route.paramMap.subscribe(pMap => {
      if(!pMap.has('placeId')){
        this.navCtrl.navigateBack('/places/tabs/discover');
        return;
      }
      this.place = this.placeOffersService.getPlaceOffers(pMap.get('placeId'));
    });
    console.log(this.place);
  }
  onBookPlace(){
    this.navCtrl.navigateBack('/places/tabs/discover');
  }
}
