import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import {
  GoogleMaps, GoogleMap, GoogleMapsEvent,
  GoogleMapOptions, LocationService, Circle, CircleOptions,
  Marker, ILatLng, GoogleMapsAnimation
} from '@ionic-native/google-maps';

/*
  Generated class for the MapProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MapProvider {
  public map: GoogleMap;
  private marker: Marker;

  constructor(private platform: Platform) {}

  attachMap(divId: string, coords, accuracy: number) {
    return new Promise((resolve, reject) => {

      if (this.map) {
        console.log("Google map already exists, update.. ", divId);
        this.map.setDiv(divId);
        this.map.animateCamera({
          target: coords,
          zoom: 15
        })
        .then(() => {
          resolve();
        });
      }
      console.log("Create new map on div", divId)
      let options: GoogleMapOptions = {
        controls: {
          compass: true,
          myLocation: true,
          myLocationButton: true,
          mapToolbar: true,
          zoom: true,
        },
        camera: {
          target: coords,
          zoom: 15
        }
      };
      // this.map.addCircle()
      this.map = GoogleMaps.create(divId, options);
    });
  }

  detachMap() {
    this.map.setDiv();
  }

  getMyLocation() {
    return LocationService.getMyLocation();
  }

}
