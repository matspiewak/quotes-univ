import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QodPage } from './qod.page';

const routes: Routes = [
  {
    path: '',
    component: QodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QodPageRoutingModule {}
