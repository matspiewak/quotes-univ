import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QuoteService,SearchType } from './../../services/quote.service';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase/app';
import 'firebase/auth';

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
  userId: string;

  constructor(private quoteService: QuoteService, private afDb: AngularFireDatabase) { 
    firebase.auth().onAuthStateChanged(function(user) {
      if(user){
        var userId = user.uid.toString();
        return userId;
      } else{
        //login page
      }
    })
  }

  ngOnInit() {
  }

  searchChanged(){
    this.results = this.quoteService.searchData(this.searchTerm,this.type);
    console.dir(this.results);
  }
  
  saveQuote(quote: string,author: string, pk: number){
    this.clicked = true;
    if(author==null)
      author='n/a';
    this.afDb.object('Quotes/'+this.userId+'/'+pk.toString()+'/').set({
      id: pk,
      quote: quote,
      author: author
    });
    console.log('Success');
  }
}
