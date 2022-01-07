import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableItemsComponent } from './table-items/table-items.component';
import { DetailItemComponent } from './detail-item/detail-item.component';
import { ItemComponent } from './item/item.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { InputSearchComponent } from './input-search/input-search.component';     

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    TableItemsComponent,
    DetailItemComponent,
    ItemComponent,
    SearchBarComponent,
    InputSearchComponent,
  ],
  providers: [],
  exports: [
    TableItemsComponent,
    DetailItemComponent,
    SearchBarComponent,
    InputSearchComponent
  ]
})

export class SharedComponentsModule { }
