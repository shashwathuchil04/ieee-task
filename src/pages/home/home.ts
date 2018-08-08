import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { MapProvider } from '../../providers/map/map';
import { MyLocation } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  mapId: string = "map_canvas1";
  lastUpdateTime: Date = new Date();
  minFrequency: number = 15000;  // 15-seconds
  error: string;
  locationLatData:any;
  locationLangData:any;

  constructor(private map: MapProvider,
              private geolocation: Geolocation,
              private storage: Storage,
              platform: Platform) {
      platform.ready().then(() => {
        this.setupWatch();
      }).catch((err) => {
        console.log("Error watching...", err);
      });
  }
  receiveMessage($event) {
    // this.message = $event
    console.log("mesage came from child")
  }

  setupWatch() {
    console.log("Setting up watch...");
    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      // console.log("got subscribed data", data);
      if (data.coords === undefined) {
        // this.location = data.coords;
        return;
      }
      this.error = null;
      // Ignore if its too soon...
      var now = new Date();
      const delta = now.getTime() - this.lastUpdateTime.getTime();
      if(this.lastUpdateTime && delta < this.minFrequency){
        // console.log("Ignoring position update.. too fast");
        return;
      }
      this.lastUpdateTime = now;
      this.locationLatData = data.coords.latitude;
      this.locationLangData = data.coords.longitude;
      // Process the update..
      let coords = {lat: data.coords.latitude, lng: data.coords.longitude};
      this.storage.get('location').then((val) => {
        let values = [];
        if (val) {
          // Reading the full values is inefficient.. Ideally this should
          // be a DB table where we just insert rows...
          values = JSON.parse(val);

          // Add values to the front..
          values.unshift({...coords, id: values.length + 1});
        }
        this.storage.set('location', JSON.stringify(values));
     }).catch((err) => {
       console.log('Error accessing location object from local storage', err);
     });
     // AttachMap will re-position camera to the new position...
     this.map.attachMap(this.mapId, coords, data.coords.accuracy);
   }, (err) => { console.log('Subscribe error', err)});
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter');
    this.map.getMyLocation().then((location: MyLocation) => {
      console.log("Location ", location, this.map);
      if (this.map) {
        this.locationLatData = location.latLng.lat
        this.locationLangData = location.latLng.lng
        this.map.attachMap(this.mapId, location.latLng, location.accuracy);
      }
    }).catch((error) => {
      this.error = error.error_message;
      console.log('Error get location', error);
    });
  }

  ionViewWillLeave() {
    this.map.detachMap();
  }

}
