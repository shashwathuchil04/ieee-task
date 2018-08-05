import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Diagnostic } from '@ionic-native/diagnostic';
import { AlertController } from 'ionic-angular';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // rootPage = TabsPage; <-- In order to prevent the native plugin is not found error,
  rootPage:any;// = 'TabsPage';

  constructor(private platform: Platform, private statusBar: StatusBar,
    private splashScreen: SplashScreen, private diagnostic: Diagnostic,
    private alertCtrl: AlertController) {
    this.resolveGeolocation();
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Location Access Denied..',
      subTitle: 'Cannot run application without location. App will be closed..',
      buttons: [{
        text: 'Dismiss',
        role: 'cancel',
        handler: () => {
          this.platform.exitApp();
        }
      }]
    });
    alert.present();
  }

  private async resolveGeolocation() {
    try {
      const reqLocAuthorization = await this.diagnostic.requestLocationAuthorization();
      if (reqLocAuthorization === 'GRANTED') {
        console.log('resolveGeolocation granted.');
        this.initApp();
      } else {
        this.showAlert();
      }
    } catch (error) {
      console.log('resolveGeolocation error ', error);
      this.showAlert();
      // Looks like you have diss-allowed GPS, you need to resolve Geo Location in order to use this app :(
    }
  }

  initApp() {
    this.platform.ready().then(() => {
      this.rootPage = 'TabsPage';  // <-- load the first page here.

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
