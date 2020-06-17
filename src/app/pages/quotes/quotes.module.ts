import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuotesPageRoutingModule } from './quotes-routing.module';

import { QuotesPage } from './quotes.page';
import { Toast } from '@ionic-native/toast/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuotesPageRoutingModule
  ],
  declarations: [
    QuotesPage
  ],
  providers: [
    Toast
  ]
})
export class QuotesPageModule {}
