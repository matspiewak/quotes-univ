import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ok } from 'assert';

export enum SearchType {
  all = ''
}

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  url = 'https://api.paperquotes.com/apiv1/quotes/';
  apiKey='Token 6d87e3369715a82c7d00201b9811e66ea1f72c32';

  constructor(private http: HttpClient) { }
  searchData(tags: string, type: SearchType){
    let headers = new HttpHeaders().set("Authorization", 'Token 6d87e3369715a82c7d00201b9811e66ea1f72c32');
    return this.http.get(`${this.url}?tags=${encodeURI(tags)}`, {headers:headers}).pipe(
      map(results => results['results'])
    );
  }
}
