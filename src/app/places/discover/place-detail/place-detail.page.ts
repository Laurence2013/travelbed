import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NavController, ModalController, ActionSheetController } from '@ionic/angular';

import { Place } from '../../places.model';
import { PlaceOffersService } from '../../place-offers.service';
import { CreateBookingComponent } from '../../../booking/create-booking/create-booking.component';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place: Place;

  constructor(
    private route: ActivatedRoute, 
    private navCtrl: NavController, 
    private placeOffersService: PlaceOffersService, 
    private modalCtrl: ModalController, 
    private actionSheetController: ActionSheetController
  ){}
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
    //this.navCtrl.navigateBack('/places/tabs/discover');
    this.actionSheetController.create({
      header: 'Choose an Action',
      buttons: [
        { text: 'Select Date', handler:() => {this.openBookingModal('select')}},
        { text: 'Random Date', handler:() => {this.openBookingModal('random')}},
        { text: 'Cancel', role: 'cancel'},
      ]
    }).then(actionSheetEl => { actionSheetEl.present(); });
  }
  openBookingModal(mode: 'select' | 'random'){
    console.log(mode);
    this.modalCtrl.create({ component: CreateBookingComponent, componentProps: { selectedPlace: this.place } }).then(modalEl => {
      modalEl.present();
      return modalEl.onDidDismiss();
    }).then(resultData => {
      console.log(resultData.data, resultData.role);
      if(resultData.role === 'confirm'){
        console.log('BOOKED!');
      }
    });
  }
}
