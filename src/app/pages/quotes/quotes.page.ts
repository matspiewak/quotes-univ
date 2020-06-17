import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QuoteService,SearchType } from './../../services/quote.service';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { Toast } from '@ionic-native/toast/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.page.html',
  styleUrls: ['./quotes.page.scss'],
})
export class QuotesPage implements OnInit {

  results: Observable<any>;
  searchTerm: string = '';
  type: SearchType = SearchType.all;
  clicked: boolean = false;
  signedIn: boolean;

  constructor(private quoteService: QuoteService, private afDb: AngularFireDatabase,private toast: Toast, private navCtrl: NavController) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged(user =>{
      if(user)
        this.signedIn = true;
      else
        this.signedIn = false;
    })
  }

  searchChanged(){
    this.results = this.quoteService.searchData(this.searchTerm,this.type);
    console.dir(this.results);
  }
  
  saveQuote(quote: string,author: string, pk: number){
    firebase.auth().onAuthStateChanged( user => {
      if(user){
        this.clicked = true;
        if(author==null)
          author='n/a';
        this.afDb.object('Quotes/'+firebase.auth().currentUser.uid.toString()+'/'+pk.toString()+'/').set({
          id: pk,
          quote: quote,
          author: author
        });
        console.log('Success');
      } else{
        this.toast.show('Nie jesteś zalogowany','1500','center').subscribe(toast => {
          console.log(toast)
        });
      }
    })
  }
    action(){
    if(this.signedIn)
      this.signOut();
    else if(!this.signedIn)
      this.signIn();
  }
  signOut(){
    firebase.auth().signOut();
    this.navCtrl.navigateForward('/home/qod');
  }
  signIn(){
    this.navCtrl.navigateForward('/login');
  }
}
