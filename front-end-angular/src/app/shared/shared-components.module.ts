import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';

         

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    NavBarComponent,
    ItemsListComponent,
    ItemDetailComponent,
  ],
  providers: [],
  exports: [
    NavBarComponent,
    ItemsListComponent,
    ItemDetailComponent
  ]
})

export class SharedComponentsModule { }
