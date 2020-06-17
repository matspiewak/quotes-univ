import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QodPageRoutingModule } from './qod-routing.module';

import { QodPage } from './qod.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QodPageRoutingModule
  ],
  declarations: [QodPage]
})
export class QodPageModule {}
