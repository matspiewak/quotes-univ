import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular'
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {

  constructor(private afAuth: AngularFireAuth, private navCtrl: NavController) { }

  initialize(){
    this.afAuth.onAuthStateChanged(function(user) {
      if(user){
        var userId = user.uid;
      } else {
        this.navCtrl.navigateForward('login');
      }
    })
  }
}
