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
  
  signedIn: boolean;

  action(){
    if(this.signedIn)
      this.signOut();
    else if(!this.signedIn)
      this.signIn();
  }
  signOut(){
    this.afAuth.signOut();
    this.navCtrl.navigateForward('/home/qod');
  }
  signIn(){
    this.navCtrl.navigateForward('/login');
  }
}
