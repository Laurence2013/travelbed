import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-offer-detail',
  templateUrl: './offer-detail.page.html',
  styleUrls: ['./offer-detail.page.scss'],
})
export class OfferDetailPage implements OnInit {

  constructor(private navCtrl: NavController){}
  ngOnInit(){}
  onOfferDetail(){
    this.navCtrl.navigateBack('/places/offers');
  }
}
