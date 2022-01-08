import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableItemsComponent } from './table-items/table-items.component';
import { DetailItemComponent } from './detail-item/detail-item.component';
import { ItemComponent } from './item/item.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { InputSearchComponent } from './input-search/input-search.component';
import { PriceComponent } from './price/price.component';
import { ErrorMessageComponent } from './error-message/error-message.component';     

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
    PriceComponent,
    ErrorMessageComponent,
  ],
  providers: [],
  exports: [
    TableItemsComponent,
    DetailItemComponent,
    SearchBarComponent,
    InputSearchComponent,
    PriceComponent,
    ErrorMessageComponent
  ]
})

export class SharedComponentsModule { }
