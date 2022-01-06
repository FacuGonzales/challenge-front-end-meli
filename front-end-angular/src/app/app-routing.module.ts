import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const defaultPathApp = '/';

const routes: Routes = [
  { 
    path: '', 
    loadChildren: () => import('./components/home-component/home.module').then(m => m.HomeModule), 
  },
  { 
    path: 'items/:search', 
    loadChildren: () => import('./components/items-list-component/items-list.module').then(m => m.ItemsListModule), 
  },
  { 
    path: 'item/:id', 
    loadChildren: () => import('./components/item-detail-component/item-detail.module').then(m => m.ItemDetailModule), 
  },
  {
    path: '**', redirectTo: defaultPathApp
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
