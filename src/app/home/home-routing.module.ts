import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'qod',
        loadChildren: () => import('./../pages/qod/qod.module').then( m => m.QodPageModule)
      },
      {
        path: 'quotes',
        loadChildren: () => import('./../pages/quotes/quotes.module').then( m => m.QuotesPageModule)
      },
      {
        path: 'my-quotes',
        loadChildren: () => import('./../pages/my-quotes/my-quotes.module').then( m => m.MyQuotesPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
