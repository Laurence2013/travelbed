import { Injectable } from '@angular/core';

import { Place } from './places.model';

@Injectable({
  providedIn: 'root'
})
export class PlaceOffersService {
  private _placeOffers: Place[] = [
    new Place('po1', 'Manhatten Masion', 'Winter break 25% off Manhattan Masion', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhips.hearstapps.com%2Fhmg-prod.s3.amazonaws.com%2Fimages%2Fgettyimages-688899881-1519413300.jpg%3Fcrop%3D1.00xw%3A0.752xh%3B0%2C0.135xh%26resize%3D768%3A*&f=1&nofb=1', 151.99),
    new Place('po2', 'Luxury Chateau Bouffemont', 'Winter Wonderland in Paris 20% off', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.myprivatevillas.com%2Fmedia%2F782536%2Fchateau-paris-france-wedding-event-luxury-bouffemont-cov.jpg&f=1&nofb=1', 151.99),
    new Place('po3', 'Castle of Europe', 'Christmas gift for 2, 20% off', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.TWpHuHLNWPnyrwTRxm9txwHaEo%26pid%3DApi&f=1', 73.99)
  ];

  constructor(){}
  get placeOffers(){
    return [...this._placeOffers];
  }
}
