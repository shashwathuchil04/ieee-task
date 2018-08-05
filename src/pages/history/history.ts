import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html'
})
export class HistoryPage {
  public items:Array<any> = new Array();

  constructor(public navCtrl: NavController,
              private storage: Storage) {
    storage.get('location').then((val) => {
      if (val) {
        this.items = JSON.parse(val);
        console.log('History items', this.items);
      }
    });
  }

  doRefresh(refresher) {
    console.log('Begin Refresh', refresher);
    this.storage.get('location').then((val) => {
      if (val) {
        this.items = JSON.parse(val);
        console.log('History items', this.items);
      }
      refresher.complete();
    }).catch(() => {
      refresher.complete();
    });
  }
}
