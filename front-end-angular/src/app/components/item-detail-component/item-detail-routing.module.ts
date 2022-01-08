import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemDetailComponent } from './page/item-detail.component';

const routes: Routes = [
  {
    path: '', component: ItemDetailComponent, 
    data: { breadcrumb: 'Detalle' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ItemDetailRoutingModule { }