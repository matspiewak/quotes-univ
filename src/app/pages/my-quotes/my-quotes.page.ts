import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireDatabase } from "@angular/fire/database";
import { NavController } from '@ionic/angular';
import 'firebase/auth';

@Component({
  selector: 'app-my-quotes',
  templateUrl: './my-quotes.page.html',
  styleUrls: ['./my-quotes.page.scss'],
})
export class MyQuotesPage implements OnInit {

  items: any;
  information: any;
  id: string;
  constructor(private afDb: AngularFireDatabase, private navCtrl: NavController) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged(user => {
      this.get(user.uid.toString()).valueChanges().subscribe( data => {
        this.information = data;
      })
    });
  }

  get(userId: string){
    return this.afDb.list('Quotes/'+userId+'/');
  }

  authUser(){
    firebase.auth().onAuthStateChanged(user => {
      console.log(user.uid)
    });
  }
}
