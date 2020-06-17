import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyQuotesPageRoutingModule } from './my-quotes-routing.module';

import { MyQuotesPage } from './my-quotes.page';
import { Vibration } from '@ionic-native/vibration/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyQuotesPageRoutingModule
  ],
  declarations: [
    MyQuotesPage
  ],
  providers: [
    Vibration
  ]
})
export class MyQuotesPageModule {}
