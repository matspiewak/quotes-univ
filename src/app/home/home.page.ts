import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl: NavController, private splashScreen: SplashScreen) {
    
    this.splashScreen.show();
    this.splashScreen.hide();

    this.navCtrl.navigateForward("/home/qod")
  }
  

}
