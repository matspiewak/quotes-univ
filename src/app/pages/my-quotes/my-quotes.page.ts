import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireDatabase } from "@angular/fire/database";
import { NavController } from '@ionic/angular';
import 'firebase/auth';
import { AlertController } from '@ionic/angular';
import { Vibration } from '@ionic-native/vibration/ngx';

@Component({
  selector: 'app-my-quotes',
  templateUrl: './my-quotes.page.html',
  styleUrls: ['./my-quotes.page.scss'],
})
export class MyQuotesPage implements OnInit {

  items: any;
  information: any;

  constructor(private afDb: AngularFireDatabase, private navCtrl: NavController, public alertController: AlertController, private vibration: Vibration) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        this.get(user.uid.toString()).valueChanges().subscribe( data => {
          this.information = data;
        })
      } else
          this.navCtrl.navigateForward('/login');
    });
  }

  get(userId: string){
    return this.afDb.list('Quotes/'+userId+'/');
  }

  async deleteQuote(id: number){
    this.vibration.vibrate(1000);
    const alert = await this.alertController.create({
      header: 'Ostrzeżenie',
      message: 'Czy na pewno chcesz usunąć?',
      buttons: [
        {
          text: 'Ok',
          handler: (x) => {
            this.afDb.object('Quotes/'+firebase.auth().currentUser.uid.toString()+'/'+id.toString()+'/').remove();
            console.log('Success');
          }
        },
        {
          text: 'Anuluj',
          role: 'cancel',
          handler: (x) => {
            console.log('Cancelled');
          }
        }
      ]
    });
    await alert.present();
  }
}

            
