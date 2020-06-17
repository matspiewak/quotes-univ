import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController} from '@ionic/angular';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  selector: 'app-qod',
  templateUrl: './qod.page.html',
  styleUrls: ['./qod.page.scss'],
})
export class QodPage implements OnInit {

  signedIn: boolean;

  constructor(public afAuth: AngularFireAuth, public navCtrl: NavController) { 
    firebase.auth().onAuthStateChanged(user =>{
      if(user)
        this.signedIn = true;
      else
        this.signedIn = false;
    })
  }

  ngOnInit() {
  }

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
