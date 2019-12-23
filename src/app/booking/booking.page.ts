import { Component, OnInit } from '@angular/core';

import { IonItemSliding } from '@ionic/angular';

import { BookingService } from './booking.service';
import { BookingModel } from './booking.model';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {
  loadedBookings: BookingModel[];

  constructor(private bookingService: BookingService){}
  ngOnInit(){
    this.loadedBookings = this.bookingService.bookings;
  }
  onCancelBooking(offerId: string, slidingEl: IonItemSliding){
    slidingEl.close();
  }
}
