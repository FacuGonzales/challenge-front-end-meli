import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ItemsListRoutingModule } from './items-list-routing.module';
import { SharedComponentsModule } from 'src/app/shared/shared-components.module';
import { ItemsListComponent } from './page/items-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ItemsListRoutingModule,
    SharedComponentsModule,
  ],
  declarations: [ItemsListComponent],
  providers: [],
})

export class ItemsListModule { }
