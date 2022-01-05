import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const defaultPathApp = '/';

const routes: Routes = [
  { 
    path: '', 
    loadChildren: () => import('./components/home-component/home.module').then(m => m.HomeModule), 
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
