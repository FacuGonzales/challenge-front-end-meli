import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableItemsComponent } from './table-items/table-items.component';
import { DetailItemComponent } from './detail-item/detail-item.component';
import { ItemComponent } from './item/item.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

         

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    NavBarComponent,
    TableItemsComponent,
    DetailItemComponent,
    ItemComponent,
    SearchBarComponent,
  ],
  providers: [],
  exports: [
    NavBarComponent,
    TableItemsComponent,
    DetailItemComponent,
    SearchBarComponent
  ]
})

export class SharedComponentsModule { }
